import React, { useEffect, useState } from 'react';
import '../../styles/LatestNews.css';

function LatestNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=e52dec99b94545b281e7fadae8d2a34e')
            .then(response => response.json())
            .then(data => setNews(data.articles));
    }, []);

    return (
        <div className="LatestNews">
            <h2>Today News</h2>
            <ul>
                {news.map(article => (
                    <li key={article.url}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default LatestNews;
