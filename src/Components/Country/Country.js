import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    // console.log(props.country);
    const {name , capital, callingCodes, flag, region} = props.country;


    const countryStyle ={
        margin:'10px',
        border:'1px solid red'
    }
    return (
        <div style={countryStyle} >
            <h1>{name}</h1>
            <h4>{callingCodes}</h4>
            <h4>{capital}</h4>
            <img width="120px" src={flag} alt=""/>
            <h4>{region}</h4>
            <Link to={`/country/${name}`}>Details</Link>
        </div>
    );
};

export default Country;