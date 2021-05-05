import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = (props) => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
console.log(country)
 
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            // .then(res => res.json())
            .then(data => setCountry(data))
    },[countryName])
  
    // for (let i = 0; i < country.length; i++) {
    //     const updatedInfo = country[i];
    //     return country;
    //     console.log("ver gi",updatedInfo)
    // }
    return (
        <div>
            <h5>{country.length}</h5>
          <h1>Country Name :</h1>
          {/* <h2>City : {capital}</h2>
          <h2>Country Name :{name}</h2> */}
        </div>
    );
};

export default CountryDetail;