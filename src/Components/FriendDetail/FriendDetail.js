import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = (props) => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    console.log(friend)
    const {name,email,phone} = friend;
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then( res => res.json())
        .then(data => setFriend(data))
    },[friendId])
    return (
        <div>
            <h1>Friend details here {friendId}</h1>
            <p> User Name :{name}</p>
            <p>Email : {email}</p>
            <p>{phone}</p>
            <p>Address : </p>
        </div>
    );
};

export default FriendDetail;