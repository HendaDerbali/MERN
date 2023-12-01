import React, { useEffect } from 'react';
import Axios from 'axios';

const Display = (props) => {
  const { Pokemon, setPokemon } = props; // props

  //!------------------------- UseEffect
  useEffect(() => {
    Axios.get('https://akabab.github.io/superhero-api/api/all.json')
      .then((res) => {
        // Axios Wraps everything in .data
        console.log(res.data);
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 

  return (
    <div>
      {Pokemon.map((pokemon, index) => (
        <p key={index}>{pokemon.name}</p>
      ))}
    </div>
  );
};

export default Display;
