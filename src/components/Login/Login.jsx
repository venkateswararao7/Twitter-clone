import { doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import Google from "../../images/Google.png";
import "../../styles/Login/Login.css";
import { db } from "./FireBase";

function Login() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");


    function handleChange(event) {
        setEmail(event.target.value);
    }

    function handleNameChange(event) {
        setUserName(event.target.value);
    }

    useEffect(() => {
        setEmail(localStorage.getItem("email"));
        setUserName(localStorage.getItem("userName"));
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        if (email && userName) {

            const tweetDocRef = doc(db, "tweets", email);
            await setDoc(tweetDocRef, { emailId: email, user: userName });
            localStorage.setItem("emailId", email);
            localStorage.setItem("userName", userName);
            window.location.href = "/Home";
        }
    }

    return (
        <div className="Login">
            <div className="login-page">
                <div className="log">
                    <div className="close">
                        <CloseOutlinedIcon />
                    </div>
                    <div className="twitterIcon">
                        <TwitterIcon />
                    </div>
                </div>
                <div className="google-account">
                    <h1>Sign in to Twitter</h1>

                    <div className="google">
                        <img src={Google} alt="Google log" draggable="false" />
                        <h3>Sign with Google </h3>
                    </div>
                </div>
                <div className="Apple-account">
                    <div className="Apple">
                        <PhoneAndroidOutlinedIcon />
                        <h3>Sign with Mobile Number</h3>
                    </div>
                </div>
                <div className="or">
                    <div className="lines">
                        <div className="line"></div>
                    </div>
                    <p>Or</p>
                    <div className="lines">
                        <div className="line"></div>
                    </div>
                </div>
                <div className="user-login">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="login_id"
                            value={email}
                            onChange={handleChange}
                            placeholder=" Email"
                        />
                        <input
                            type="text"
                            name="user-name"
                            value={userName}
                            onChange={handleNameChange}
                            placeholder="Name"
                        />
                        <button type="submit">Next</button>
                    </form>
                </div>
            </div>
        </div>
    );

}


export default Login;
