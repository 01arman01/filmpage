import React from 'react';
import s from './StarRating.module.css'
function StarRating(props) {
    return (
        <div className={s.starRating}>
            <div>
                {
                    Array.from({length:5},(_,i)=>{
                        return <span>${i+1},</span>
                    })
                }
            </div>
            <p>
               10
            </p>
        </div>
    );
}

export default StarRating;