import React from 'react';
import s from './WatchedMovesStatistics.module.css'

function WatchedMovesStatistics({tempWatchedData}) {
     let imdbRatings = 0
     let userRatings = 0
    let  averageRuntime = 0

    tempWatchedData.forEach(item=>{
        imdbRatings = item.imdbRating/2 + imdbRatings
        userRatings = item.userRating/2 + userRatings
        averageRuntime = item.runtime/2 + averageRuntime
    })

    return (
        <div className={s.WatchedMovesStatisticsContainetr} >
            <h2>Movies you watched</h2>
            <div className={s.descriptionContainer}>
                <div >⚔ {tempWatchedData.length} movies</div>
                <div>⭐{imdbRatings}</div>
                <div>🌟{userRatings}</div>
                <div>⏲ {averageRuntime} min</div>
            </div>

        </div>
    );
}

export default WatchedMovesStatistics;