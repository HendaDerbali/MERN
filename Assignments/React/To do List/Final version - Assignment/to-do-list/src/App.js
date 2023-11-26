import React, { useState } from 'react';
//import './App.css';
import Form from './components/Form';
import Display from './components/Display';




function App() {

  const [Task, setTask] = useState([]) // we want to get and set tasks , 
                                       //and we want to be avaibable in multile places (Form  to update the List ) 
                                       // And avalable in display in order to  Get )


  return (
    <fieldset>
      <legend>App.jsx</legend>
      <fieldset>
        <legend>Form.jsx</legend>
        {/* props */}
        <Form Task={Task} setTask={setTask} />     
        <Display Task={Task} />

      </fieldset>
    </fieldset>
  );
}

export default App;
