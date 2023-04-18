import React, { useEffect, useState } from 'react';
import { db } from '../Login/FireBase';
import { collectionGroup, getDocs, where } from "firebase/firestore";

function Tweets() {
    const [users, setUsers] = useState([]);
    const [emailId, setEmailId] = useState("");

    useEffect(() => {
        setEmailId(localStorage.getItem("emailId"));
    }, []);

    useEffect(() => {
        const getUsers = async () => {
            const q = collectionGroup(db, 'tweet');
            const querySnapshot = await getDocs(where(q, 'emailId', '==', emailId));
            const data = querySnapshot.docs.map(doc => doc.data());
            setUsers(data);
        };

        getUsers();
    }, [emailId]);

    return (
        <div className='DataBaseFeed'>
            {users.map(user => (
                <div key={user.id}>
                    <p>{user.user}</p>
                    <p>{user.tweet}</p>
                </div>
            ))}
        </div>
    );
}

export default Tweets;
