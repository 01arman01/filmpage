import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import  {tempMovieData,tempWatchedData} from "./data";
import StarRating from "./components/StarRating/StarRating";

const  test = ()=>{
        return(
            <div>
                    <StarRating color='blue'/>
            </div>
        )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App
//         tempMovieData={tempMovieData}
//         tempWatchedData={tempWatchedData}
//     />
// );
root.render(
    <>
        <StarRating maxRating={5}
                    size={60}
                    color={'#F4AA0A'}
        />
        <StarRating maxRating={10}
                    color={'red'}
                    defaultRating={2}
        />
        <StarRating
            maxRating={5}
            messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
        />

    </>
);




