import React from 'react';
import s from './Header.module.css'
function Header() {
    return (
        <header className={s.header}>
            <div className={s.logo} >
                <span className={s.logoImage}>🍿</span>
                <h2>usePopcorn</h2>
            </div>
            <div><input type='text' className={s.search} placeholder='Search movies...' /></div>
            <p className={s.moviesNum}>Found 3 results</p>
        </header>
    );
}

export default Header;