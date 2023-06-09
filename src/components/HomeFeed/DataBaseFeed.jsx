import React, { useEffect, useState } from 'react';
import { db } from '../Login/FireBase';
import { collection, getDocs } from "firebase/firestore";

function DataBaseFeed() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'tweets'));
            const data = querySnapshot.docs.map(doc => doc.data());
            setUsers(data);
        };

        getUsers();
    }, []);

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

export default DataBaseFeed;
