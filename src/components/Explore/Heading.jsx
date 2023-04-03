import React, { useState, useEffect } from 'react';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import "../../styles/Explore/Heading.css";
import Search from "../TrendingFeed/Search";

function Heading() {
    const [sportsNews, setSportsNews] = useState([]);
    const [entertainment, setEntertainment] = useState([]);
    const [trending, setTrending] = useState([]);
    const [foryou, setForYou] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e52dec99b94545b281e7fadae8d2a34e')
            .then(response => response.json())
            .then(data => setSportsNews(data.articles));
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=e52dec99b94545b281e7fadae8d2a34e')
            .then(response => response.json())
            .then(data => setEntertainment(data.articles));
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-03&sortBy=publishedAt&apiKey=e52dec99b94545b281e7fadae8d2a34e')
            .then(response => response.json())
            .then(data => setTrending(data.articles));
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-03&sortBy=publishedAt&apiKey=e52dec99b94545b281e7fadae8d2a34e')
            .then(response => response.json())
            .then(data => setForYou(data.articles));
    }, []);

    const [selectedNews, setSelectedNews] = useState([]);

    useEffect(() => {
        setSelectedNews(foryou);
    }, [foryou]);

    return (
        <div className='Heading'>
            <div className='main-heading'>
                <h2>Explore</h2>
                <SettingsSuggestOutlinedIcon />
            </div>
            <div className='search'>
                <Search />
            </div>
            <div className='Explore-options'>
                <div className='mobile' onClick={() => setSelectedNews(trending)}>
                    <h2>For You</h2>
                </div>
                <div onClick={() => setSelectedNews(trending)}>
                    <h2>Trending</h2>
                </div>
                <div onClick={() => setSelectedNews(sportsNews)}>
                    <h2>Sports</h2>
                </div>
                <div onClick={() => setSelectedNews(entertainment)}>
                    <h2>Entertainment</h2>
                </div>
            </div>
            <div className='display-data'>
                <ul>
                    {selectedNews.map(article => (
                        <li key={article.url}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Heading;
