import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = (props) => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [countryName])

    return (
        <>
            {
                country.map(country => <div key={country.alpha3Code}>
                    <h1>{country.name}</h1>
                    <img src={country.flag} width="250px" alt="" />
                    <p>Area Code : {country.area}</p>
                    <p>population : {country.population}</p>
                    <p>top Level Domain : ({country.topLevelDomain} )</p>
                    <p>Time Zone : {country.timezones} </p>
                </div>)
            }
        </>
    );
};

export default CountryDetail;