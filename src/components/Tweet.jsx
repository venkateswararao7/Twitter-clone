import React, { Fragment } from 'react';
import Image from './Image';
import Emoji from './HomeFeed/Emoji';
import PublicIcon from '@mui/icons-material/Public';
import Profile from "../images/default_profile.png";
import "../styles/Tweet.css";

function Tweet() {
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
                        <form>
                            <div className='wishing'>

                                <textarea row="15" cols="60" placeholder='What is happening ?' ></textarea>

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

export default Tweet