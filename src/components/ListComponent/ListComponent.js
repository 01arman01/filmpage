import React from 'react';
import s from './ListComponent.module.css'
function ListComponent({bgc,status,onChange,children}) {
    return (
        <div className={s.listContainer}>
            <div style={{background:bgc?bgc:'inherit'}} className={s.buttonContainer} onClick={onChange}> <button>{status?'-':'+'}</button></div>
                 {status && <div>{children}</div>}
            </div>

    );
}

export default ListComponent;