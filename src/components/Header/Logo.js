import React from 'react';
import s from "./Header.module.css";

function Logo() {
    return (

        <div className={s.logo}>
            <span className={s.logoImage}>🍿</span>
            <h2>usePopcorn</h2>
        </div>

    );
}

export default Logo;