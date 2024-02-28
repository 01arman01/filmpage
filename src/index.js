import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {tempMovieData,tempWatchedData} from "./data";
import StarRating from "./components/StarRating/StarRating";

const Test = () => {
    const [moveRating,setMoveRating] = useState(0)
    return (
        <div style={{color:"white"}}>
            <StarRating color='blue' maxRating={10} onSetRating={setMoveRating}/>
            <p>This movies was rated  {moveRating} stars</p>

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App
        tempMovieData={tempMovieData}
        // tempWatchedData={tempWatchedData}
    />
);
// root.render(
//     <>
//         <StarRating maxRating={5}
//                     size={60}
//                     color={'#F4AA0A'}
//         />
//         <StarRating maxRating={10}
//                     color={'red'}
//                     defaultRating={2}
//         />
//         <StarRating
//             maxRating={5}
//             messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
//         />
//         <Test/>
//
//     </>
// )




