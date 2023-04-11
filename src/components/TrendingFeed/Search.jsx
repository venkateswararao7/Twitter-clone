import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../../styles/TrendingFeed/Search.css";

function Search() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searching, setSearching] = useState(false);

    const handleSearch = (event) => {
        event.preventDefault();
        setSearching(true);
        fetch(`https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY_HERE&cx=YOUR_CX_HERE&q=${searchText}`)
            .then((response) => response.json())
            .then((data) => setSearchResults(data.items))
            .catch((error) => console.error(error))
            .finally(() => setSearching(false));
    };

    return (
        <div className='search'>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search..." value={searchText} onChange={(event) => setSearchText(event.target.value)} />
                <div className='search-symbol'>
                    <button type='submit' disabled={searching}>
                        <SearchIcon />
                    </button>
                </div>
            </form>
            <ul>
                {searchResults.map((result) => (
                    <li key={result.link}>
                        <a href={result.link}>{result.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search;
