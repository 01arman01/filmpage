import React from 'react';
import s from './WatchedMoveItem.module.css'

function WatchedMoveItem({item}) {
    return (
        <div className={s.watchMoviesContainer}>
            <div className={s.watchMoviesImageContainer}>
                <img src={item.Poster} className={s.image} alt={item.name}/>
            </div>
            <div>
                <h2> {item.name}</h2>
            </div>
        </div>
    );
}

export default WatchedMoveItem;