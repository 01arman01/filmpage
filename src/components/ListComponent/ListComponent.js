import React from 'react';
import s from './ListComponent.module.css'
function ListComponent({children}) {
    return (
        <div className={s.listContainer}>
            <div className={s.buttonContainer}> <button>-</button></div>
            <div>{children}</div>
        </div>
    );
}

export default ListComponent;