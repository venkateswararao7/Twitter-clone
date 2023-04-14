import React, { useEffect } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../../styles/Login/LoadingTwitter.css";

function LoadingTwitter() {
    useEffect(() => {
        const time = setTimeout(() => {
            window.location.href = "/Login";
        }, 2500);
        return () => clearTimeout(time);
    }, []);

    return (
        <div className="Twitter-loading">
            <div className="twitter">
                <TwitterIcon className="animated-twitter" />
            </div>
        </div>
    );
}

export default LoadingTwitter;
