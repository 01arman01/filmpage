import React from 'react';
import s from './MoveItem.module.css'
function MoveItem({item}) {
    // console.log(item.Title)
    return (
        <div className={s.moveItem}>
            <div className={s.imgContainer}>
                <img className={s.image} src={item.Poster} alt=""/>
            </div>
            <div className={s.moveDescription}>
                <h3>{item.Title}</h3>
                <p><span>📅</span>{item.Year}</p>
            </div>
        </div>
    );
}

export default MoveItem;