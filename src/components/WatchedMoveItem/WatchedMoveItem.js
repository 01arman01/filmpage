import React from 'react';
import s from './WatchedMoveItem.module.css'

function WatchedMoveItem({item}) {
    return (
        <div className={s.watchMoviesContainer}>
            <div className={s.watchMoviesImageContainer}>
                <img src={item.Poster} className={s.image} alt={item.name}/>
            </div>
            <div className={s.descriptionContainer}>
                <h2 className={s.descriptionTitle}> {item.Title}</h2>
                <div className={s.movieInformation}>
                    <p className={s.movieInformationItem}>⭐{item.imdbRating}</p>
                    <p className={s.movieInformationItem}>🌟{item.userRating}</p>
                    <p className={s.movieInformationItem}>⏲{item.runtime}</p>
                </div>
            </div>
        </div>
    );
}

export default WatchedMoveItem;