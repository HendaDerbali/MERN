import React, { useState, useEffect } from 'react';
//import styles from './Style.module.css';

const Display = (props) => {
    const {Pokemon, setPokemon} = props // props


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0 ")
          .then((response) => {
            console.log(response)
            return response.json()
          }).then(data => {
            console.log(data)
            setPokemon(data.results)
          })
          .catch((err) => {
            console.log(err)
          })
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