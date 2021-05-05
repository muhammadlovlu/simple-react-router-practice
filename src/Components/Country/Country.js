import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {

    const { name, capital, callingCodes, flag, region} = props.country;
    const history  = useHistory();
    const countryStyle = {
        margin: '10px',
        border: '1px solid red'
    }
    
    const countryinfo = (countryname) =>{
        const url = `country/${countryname}`;
        history.push(url)
    } 
    return (
        <div style={countryStyle} >
            <h1>{name}</h1>
            <h4>{callingCodes}</h4>
            <h4>{capital}</h4>
            <img width="120px" src={flag} alt="" />
            <h4>{region}</h4>
            <Link to={`/country/${name}`}>Details</Link>
            <button onClick={() => countryinfo(name)}>Details</button>
        </div>
    );
};

export default Country;