import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../../styles/Search.css";

function Search() {
    return (
        <div className='search'>
            <form >
                <input type="text" placeholder="Search..." />
                <div className='search-symbol'>
                    <button type='submit'>
                        <SearchIcon />
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Search;