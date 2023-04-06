import React, { useState, useEffect } from 'react';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import "../../styles/Explore/Heading.css";
import Search from "../TrendingFeed/Search";
import DisplayData from './DisplayData';

function Heading() {
    const [sportsNews, setSportsNews] = useState([]);
    const [entertainment, setEntertainment] = useState([]);
    const [trending, setTrending] = useState([]);
    const [foryou, setForYou] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3bee02545d414340877319f36c499ee6')
            .then(response => response.json())
            .then(data => setSportsNews(data.articles));
        fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3bee02545d414340877319f36c499ee6')
            .then(response => response.json())
            .then(data => setEntertainment(data.articles));
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-05&sortBy=publishedAt&apiKey=3bee02545d414340877319f36c499ee6')
            .then(response => response.json())
            .then(data => setTrending(data.articles));
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-03-05&sortBy=publishedAt&apiKey=3bee02545d414340877319f36c499ee6')
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
                <div className='mobile-view' onClick={() => setSelectedNews(trending)}>
                    <h2>For You</h2>
                </div>
                <div onClick={() => setSelectedNews(foryou)}>
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

                <DisplayData items={selectedNews} />

            </div>
        </div>
    )
}

export default Heading;
