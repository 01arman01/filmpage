import React, {useState} from 'react';
import s from "./Header.module.css";

function Search(props) {
    const [SearchValue, setSearchValue] = useState('')

    return (
        <div><input type='text'
                    className={s.search}
                    placeholder='Search movies...'
                    value={SearchValue}
                    onChange={e => setSearchValue(e.target.value)}
        /></div>
    );
}

export default Search;