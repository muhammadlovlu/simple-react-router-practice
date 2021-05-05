import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Friend from '../Friend/Friend';
const Home = () => {
  const [friends, setFriends] = useState([]);
  const [countries, setCountires] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data))
  }, []);

  // Rest Countries Api Loading Start
  useEffect(() => {

    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountires(data))
  }, [])
  // Rest Countries Api Loading end
  return (
    <div>
      <h1>{countries.length}</h1>
      {
        countries.map(country => <Country country={country} key={country.alpha3Code}></Country>)
      }


      {
        friends.map(friend => <Friend friend={friend} key={friend.phone}></Friend>)
      }


    </div>
  );
};

export default Home;