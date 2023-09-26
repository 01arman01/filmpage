import React from 'react';
import s from './ListComponent.module.css'
function ListComponent(props) {
    return (
        <div className={s.listContainer}>
            <div className={s.buttonContainer}> <button>-</button></div>
        </div>
    );
}

export default ListComponent;