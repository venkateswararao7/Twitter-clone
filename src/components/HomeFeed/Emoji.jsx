import React from 'react';
import "../../styles/Emoji.css";
import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import TodayIcon from '@mui/icons-material/Today';
import EditLocationIcon from '@mui/icons-material/EditLocation';

function emoji() {
    return (
        <div className='Emoji-container'>
            <CollectionsIcon />
            <GifBoxIcon />
            <PollIcon />
            <EmojiEmotionsIcon />
            <TodayIcon />
            <EditLocationIcon />
        </div>
    )
}

export default emoji;