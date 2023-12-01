import React, { useState } from 'react';
import './App.css';
import Display from './components/Display'

function App() {

  const [Pokemon, setPokemon] = useState([]);


  return (
    <fieldset>
      <legend>App.jsx</legend>
      <fieldset>
        <legend>Display.jsx</legend>

        <Display Pokemon={Pokemon} setPokemon={setPokemon} />
  
  
      </fieldset>
    </fieldset>
  );
}

export default App;
