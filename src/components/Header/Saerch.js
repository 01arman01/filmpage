// import React, {useState} from 'react';
import s from "./Header.module.css";
import {useEffect, useRef} from "react";

function Search({query, setQuery}) {
    // const [SearchValue, setSearchValue] = useState('')

    const inputEL = useRef(null)

    // useEffect(()=>{
    //     const el = document.querySelector('#search')
    //     console.log(el)
    // },[query])
    // console.log(s.search)

    useEffect(() => {
        const callback = (e) => {
            console.log(document.activeElement)
            if(document.activeElement === inputEL.current) return

            if (e.code === "Enter") {
                inputEL.current.focus()
                setQuery('')
            }
        }
        document.addEventListener('keydown', callback)
        // return () => document.addEventListener('keydown', callback)

    }, [setQuery]);

    return (
        <div><input type='text'
                    id={'search'}
                    className={s.search}
                    placeholder='Search movies...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    ref={inputEL}
        /></div>
    );
}

export default Search;