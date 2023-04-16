import React, { useEffect, useState } from 'react';
import { auth, provider } from "./FireBase";
import { signInWithPopup, signInWithPhoneNumber } from 'firebase/auth';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import Google from "../../images/Google.png";
import "../../styles/Login/Login.css";


function Login() {

    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [verificationId, setVerificationId] = useState("");

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

    function handleMobileNumberChange(event) {
        setMobileNumber(event.target.value);
    }

    function handleMobileLogin() {
        const phoneNumber = `+${mobileNumber}`;
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                setVerificationId(confirmationResult.verificationId);
            });
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
                <div className='Apple-account' onClick={handleMobileLogin}>
                    <div className='Apple'>
                        <PhoneAndroidOutlinedIcon />
                        <h3>Sign with Mobile Number</h3>
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
