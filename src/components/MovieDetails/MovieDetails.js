import React, {useEffect, useState} from 'react';
import s from './MovieDetails.module.css'
import {key} from './../../data'
import StarRating from "../StarRating/StarRating";

function MovieDetails({
                          selectedId,
                          onCloseSelectedMove,
                          onAddWatchedMovie,
                          watched
                      }) {
    const [movie, setMovie] = useState({})
    const [newUserRating, setNewUserRating] = useState(undefined)
    const [addWatchidStatus, setAddWatchidStatus] = useState(false)
    const [watcheditem,setWatcheditem] =useState([])
    useEffect(() => {

        setWatcheditem ( watched.filter(item => item.imdbID === selectedId))
          if(watcheditem.length > 0) {
            setAddWatchidStatus(false)
        } else {
            setAddWatchidStatus(true)
        }
    }, [selectedId]);
    console.log(addWatchidStatus)
    // console.log(addWatchidStatus)
    const {
        Title: title,
        Year: year,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movie
    console.table({title, year, poster, runtime, imdbRating, plot, released, actors, director, genre})
    useEffect(() => {
        async function getMovieDetails() {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${key}&i=${selectedId}`)
            const data = await res.json()
            setMovie(data)
        }

        getMovieDetails()

    }, [selectedId]);

    useEffect(() => {
        setNewUserRating(undefined)
    }, [movie])

    console.log('watcheditem')
    console.log(watcheditem)
    const onAddMovie = () => {
        onAddWatchedMovie({
            imdbID: selectedId,
            Title: title,
            Year: year,
            Poster: poster,
            runtime: Number(runtime.split(' ')[0]),
            imdbRating: Number(imdbRating),
            userRating: newUserRating,
        })
        onCloseSelectedMove()
    }
    return (
        <div>
            <div className={s.buttonContainer}>
                <button className={s.arrow_left} onClick={onCloseSelectedMove}>
                    ⬅
                </button>
            </div>
            <div className={s.header}>
                <div className={s.move_poster}>
                    <img src={poster}/>
                </div>
                <div className={s.movieInfo}>
                    <h1>{title}</h1>
                    <p>{released + ` • ` + runtime}</p>
                    <p>{genre}</p>
                    <p><span>⭐</span> {imdbRating} IMDb rating</p>
                </div>
            </div>
            <div className={s.description}>
                <div className={s.starRatingComponent}>
                    {addWatchidStatus ? <>
                        <StarRating
                            size={44}
                            maxRating={10}
                            defaultRating={newUserRating || 1}
                            onSetRating={setNewUserRating}
                        />
                        {newUserRating && <div>
                            <button className={s.buttonAdd} onClick={onAddMovie}>add Movie</button>
                        </div>}
                    </>:<>
                        <StarRating
                            size={44}
                            maxRating={10}
                            defaultRating={watcheditem.userRating}
                            onSetRating={()=>{}}
                            ratingStatus={false}
                        />

                    </>}
                </div>

                <p>{plot}</p>
                <p> Starring {actors}</p>
                <p>Directed by {director}</p>
            </div>
            {/*<p> {selectedId} </p>*/}
        </div>
    );
}

export default MovieDetails;