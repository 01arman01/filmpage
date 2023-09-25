import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {tempMovieData,tempWatchedData} from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App
        tempMovieData={tempMovieData}
        tempWatchedData={tempWatchedData}
    />
);



