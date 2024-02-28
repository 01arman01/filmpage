import React from 'react';
import s from "./Header.module.css";

function NumResults({numListMoves}) {
    return (
        <p className={s.moviesNum}>Found {numListMoves} results</p>
    );
}

export default NumResults;