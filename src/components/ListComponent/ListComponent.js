import React from 'react';
import s from './ListComponent.module.css'
function ListComponent({bgc,children}) {
    return (
        <div className={s.listContainer}>
            <div style={{background:bgc?bgc:'inherit'}} className={s.buttonContainer}> <button>-</button></div>
            <div>{children}</div>
        </div>
    );
}

export default ListComponent;