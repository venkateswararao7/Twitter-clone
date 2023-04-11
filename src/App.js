import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import DefaultHome from "./components/DefaultHome";
import News from "./components/News/News";
import Notification from "./components/Notifications/Notification";
import Bookmarks from "./components/Bookmark/Bookmark";
import Message from "./components/Messages/Messages";
import Profile from "./components/Profile/Profile";
import Explore from './components/Explore/Explore';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<DefaultHome />} />
          <Route path="/Home" element={<DefaultHome />} />
          <Route path="/News" element={<News />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path='/Bookmarks' element={<Bookmarks />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Explore" element={<Explore />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
