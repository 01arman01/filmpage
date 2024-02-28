import React from 'react';
import s from './Header.module.css'

function Header({children}) {
    return (
        <header className={s.header}>
            {children}
        </header>
    );
}

export default Header;