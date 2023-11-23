// import React, {useState} from 'react';
import s from "./Header.module.css";

function Search({query,setQuery}) {
    // const [SearchValue, setSearchValue] = useState('')

    return (
        <div><input type='text'
                    className={s.search}
                    placeholder='Search movies...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
        /></div>
    );
}

export default Search;