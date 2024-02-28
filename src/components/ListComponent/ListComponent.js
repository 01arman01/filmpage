import React, {useState} from 'react';
import s from './ListComponent.module.css'
function ListComponent({bgc,children}) {
    const [isOpen,setIsOpen] = useState(true)

    return (
        <div className={s.listContainer}>
            <div style={{background:bgc?bgc:'inherit'}} className={s.buttonContainer} onClick={()=>setIsOpen(!isOpen)}> <button>{isOpen?'-':'+'}</button></div>
                 {isOpen && <div>{children}</div>}
            </div>
    );
}

export default ListComponent;