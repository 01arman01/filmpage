import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import  {tempMovieData,tempWatchedData} from "./data";
import StarRating from "./components/StarRating/StarRating";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App
//         tempMovieData={tempMovieData}
//         tempWatchedData={tempWatchedData}
//     />
// );
root.render(
    <>
        <StarRating maxRating={5}/>
        <StarRating maxRating={10}/>
        <StarRating />

    </>
);



