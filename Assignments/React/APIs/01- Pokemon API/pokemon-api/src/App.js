import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';

function App() {

  const [Pokemon, setPokemon] = useState([]);


  return (

    <div className="App">
    
    <Display Pokemon = {Pokemon} setPokemon = {setPokemon}/>
      
    </div>
  );
}

export default App;
