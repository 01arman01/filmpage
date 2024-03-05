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



    const watchedStatus = watched.map(item=>item.imdbID).includes(selectedId)
    const watchedUserRating = watched.find(item=>item.imdbID ===selectedId )?.userRating
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

    useEffect(() => {
        if(!title) return
        document.title = `Movie | ${title}`
        return function (){
            document.title = 'Film Page'
        }
    }, [title]);

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
                    {!watchedStatus ? <>
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
                        <p>You rated with movie {watchedUserRating} 🌟</p>
                    </>}
                </div>

                <p>{plot}</p>
                <p> Starring {actors}</p>
                <p>Directed by {director}</p>
            </div>
        </div>
    );
}

export default MovieDetails;