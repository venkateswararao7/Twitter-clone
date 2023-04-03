import React from 'react';
import Slidebar from './Slidebar';
import Feed from './HomeFeed/Feed';
import Trending from './TrendingFeed/Trending';
import "../styles/DefaultHome.css";
function App() {
    return (
        <div className="App">
            <div className='app-slide-bar'>
                <Slidebar />
            </div>
            <Feed />
            <div className='Home-news'>
                <Trending />
            </div>
        </div>
    );
}

export default App;
