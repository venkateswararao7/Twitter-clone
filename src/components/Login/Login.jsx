import React, { useEffect, useState } from 'react';
import { auth, provider } from "./FireBase";
import { signInWithPopup } from 'firebase/auth';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import Google from "../../images/Google.png";
import "../../styles/Login/Login.css";
import DefaultHome from "../DefaultHome";

function Login() {

    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");

    function handleChange(event) {
        setUserId(event.target.value);

    }

    function handleNameChange(event) {
        setUserName(event.target.value);
    }

    function handleClick() {
        signInWithPopup(auth, provider)
            .then((data) => {
                setUserId(data.user.email);
                localStorage.setItem("email", data.user.email);
                window.location.href = "/Home";
            })
    }

    useEffect(() => {
        setUserId(localStorage.getItem("email"));

    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        if (userId && userName) {
            window.location.href = "/Home";
        }
    }

    return (
        <div className='Login'>
            <div className='login-page'>
                <div className='log'>
                    <div className='close'>
                        <CloseOutlinedIcon />
                    </div>
                    <div className='twitterIcon'>
                        <TwitterIcon />
                    </div>
                </div>
                <div className='google-account'>
                    <h1>Sign in to Twitter</h1>

                    <div onClick={handleClick} className='google'>
                        <img src={Google} alt="Google log" draggable="false" />
                        <h3>Sign with Google </h3>
                    </div>
                </div>
                <div className='Apple-account'>
                    <div className='Apple'>
                        <AppleIcon />
                        <h3>Sign with Apple</h3>
                    </div>
                </div>
                <div className='or'>
                    <div className='lines'>
                        <div className='line'></div>
                    </div>
                    <p>Or</p>
                    <div className='lines'>
                        <div className='line'></div>
                    </div>
                </div>
                <div className='user-login'>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="login_id" value={userId} onChange={handleChange} placeholder=' Email' />
                        <input type="text" name="user-name" value={userName} onChange={handleNameChange} placeholder='Name' />
                        <button type='submit'>Next</button>
                    </form>
                </div>

            </div>

        </div >
    );
}

export default Login;
