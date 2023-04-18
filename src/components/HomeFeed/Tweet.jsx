import React, { Fragment, useState, useEffect } from 'react';
import Image from '../Image';
import Emoji from './Emoji';
import PublicIcon from '@mui/icons-material/Public';
import Profile from "../../images/default_profile.png";
import "../../styles/HomeFeed/Tweet.css";
import firebase from 'firebase/app';
import { db } from '../Login/FireBase';
import { collection, doc, setDoc } from "firebase/firestore";

function Tweet() {
    const [tweet, setTweet] = useState("");
    const [emailId, setEmailId] = useState("");

    useEffect(() => {
        setEmailId(localStorage.getItem("emailId"));
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const userDocRef = doc(db, "users", emailId);
        const tweetCollectionRef = collection(userDocRef, "tweet");
        const newTweetRef = doc(tweetCollectionRef);

        setDoc(newTweetRef, { tweet: tweet, id: emailId })
            .then(() => {
                console.log("Document written with ID: ", newTweetRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });

        setTweet("");
    }

    return (
        <Fragment >
            <div className="profile">
                <div className='defult_pic'>
                    <Image src={Profile} value="default_profile" width={50} height={50} borderradius={20} />
                </div>
                <div className='Tweet-options'>
                    <select id="view" >
                        <option value="everyone" id="view">everyone</option>
                        <option value="private" id="view">private</option>
                    </select>
                    <div className='original-tweet'>
                        <form onSubmit={handleSubmit}>
                            <div className='wishing'>
                                <textarea row="15" cols="60" placeholder='What is happening ?' value={tweet} onChange={(event) => setTweet(event.target.value)}></textarea>
                            </div>
                            <div className='reply-option'>
                                <PublicIcon />
                                <div className='option-view'>
                                    <h5>Everyone can reply</h5>
                                </div>
                            </div>
                            <hr />
                            <div className='emoji'>
                                <Emoji />
                                <button type='submit'>Tweet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Tweet;
