import React from 'react';
import './App.css';
import Feed from './components/HomeFeed/Feed';
import Slidebar from './components/Slidebar';
import Trending from './components/TrendingFeed/Trending';
function App() {
  return (
    <div className="App">
      <div className='app-slide-bar'>
        <Slidebar />
      </div>
      <Feed />
      <Trending />

    </div>
  );
}

export default App;
