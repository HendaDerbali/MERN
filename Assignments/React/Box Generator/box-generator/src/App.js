import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';



function App() {
  const [color, setColor] = useState([])
  
  return (
<div>
      <fieldset>
        <legend>App.jsx</legend>
        <fieldset>
          <legend>Form.jsx</legend>
          <Form setColor={setColor} color={color} />
        </fieldset>
        <fieldset>
          <legend>Display.jsx</legend>
          <Display color={color} />
        </fieldset>
      </fieldset>
      
    </div>

  );
}

export default App;

