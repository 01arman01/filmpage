import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import s from './StarRating.module.css'



StarRating.propTypes = {
    maxRating:PropTypes.number,
    size:PropTypes.number,
    color: PropTypes.string,
    defaultRating:PropTypes.number,
    messages:PropTypes.array

}
function StarRating({
                        maxRating = 10,
                        color = 'yellow',
                        size = 48,
                        messages = [],
                        defaultRating = 1,
                        onSetRating,
                        ratingStatus=true,

                    }) {
    const [rating, setRating] = useState(defaultRating)
    const [hover, setHover] = useState(0)

    useEffect(()=>{
        setRating(defaultRating)
    },[defaultRating])

    const handleRating = (rating)=>{
        setRating(rating)
        onSetRating(rating)
    }

    const onHover = (starNum) => {
        setHover(starNum)
    }
    const onHoverClose = () => {
        setHover(0)
    }
    let num = 0


    if (hover > 0) {
        num = hover
    } else {
        num = rating
    }

    const styleContainer = {
        color,
        // fontSize:'40px'
    }
    const styleStarItem = {
        fontSize: `${size}px`
    }

    const textStyle = {
        fontSize: `${size / 1.5}px`,
        margin: 0,
        lineHeight: 1,
        padding: 0
    }
    // const
    return (
        <div className={s.starRating} style={styleContainer}>
            <div className={s.starContainer}>
                {
                    Array.from({length: maxRating}, (_, i) => {
                        return <span className={s.starItem} style={styleStarItem}
                                     onClick={() =>ratingStatus? handleRating(i + 1):()=>{}}
                                     onMouseEnter={() => {
                                         onHover(i + 1)
                                     }}
                                     onMouseLeave={() => onHoverClose()}
                        >
                            {(num > i) ? '★' : '☆'}
                        </span>
                    })
                }
            </div>
            <p style={textStyle}>
                {messages.length === maxRating ? messages[num - 1] : num || ''}
            </p>
        </div>
    );
}

export default StarRating;


