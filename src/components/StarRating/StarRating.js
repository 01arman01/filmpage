import React, {useState} from 'react';
import s from './StarRating.module.css'

function StarRating({maxRating=10}) {
    const [rating,setRating]=useState(1)
    const [hover,setHover] = useState(0)

    const onHover = (starNum)=>{
        setHover(starNum)
    }
    const onHoverClose = ()=>{
        setHover(0)
    }
   let num = 0
   if(hover > 0){
      num = hover
   }else {
       num = rating
   }
    return (
        <div className={s.starRating}>
            <div className={s.starContainer}>
                {
                    Array.from({length:maxRating},(_,i)=>{
                        return <span className={s.starItem}
                                     onClick={()=>setRating(i+1)}
                                     onMouseEnter={()=>{onHover(i+1)}}
                                     onMouseLeave={()=>onHoverClose()}
                        >
                            {(num > i)?'★':'☆'}
                        </span>
                    })
                }
            </div>
            <p>
                {num || ''}

            </p>
        </div>
    );
}

export default StarRating;