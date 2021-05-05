import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();


    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);

    }
    const friendStyle = {
        margin: '10px',
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid red'
    }
    return (
        <div style={friendStyle}>
            <h1>{name}</h1>
            <h4>{email}</h4>
            <Link to={`/friend/${id}`}><button>Details</button></Link>
            <button  onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;