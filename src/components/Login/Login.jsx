import React, { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import Google from "../../images/Google.png";
import "../../styles/Login/Login.css";

function Login() {
    const [userId, setUserId] = useState("");

    function handleChange(event) {
        setUserId(event.target.value);
        console.log(userId)
    }



    function handleSubmit(event) {
        event.preventDefault();

        console.log("Logging in...");
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
                    <div className='google'>
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
                        <input type="text" name="login_id" value={userId} onChange={handleChange} placeholder='Phone, Email, or Username' />
                        <button type='submit'>Next</button>
                    </form>
                </div>
                <div className='forgot'>
                    <div>
                        <h2>Forgot password?</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
