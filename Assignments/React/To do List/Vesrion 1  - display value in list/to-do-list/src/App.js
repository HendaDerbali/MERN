import React from 'react';
import './App.css';
import Form from './components/Form';

const ExistingTask = [
  { Task: "Get Mern black belt" },
  { Task: "Get Python black belt" },
  { Task: "Get .Net black belt" },
  { Task: "Get Java black belt" }
];

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <fieldset>
        <legend>Form.jsx</legend>

        <Form ExistingTask={ExistingTask} />

      </fieldset>
    </fieldset>
  );
}

export default App;
