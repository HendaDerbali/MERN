import './App.css';
import React, { useState } from 'react';
import Display from './components/Display';
import Home from './components/Home';
import Error from './components/Error';
import { Link, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [People, setPeople] = useState([]);

  return (
    <fieldset>
      <legend>App.jsx</legend>
      <fieldset>
        <legend>Components.jsx</legend>
        < Routes>

          <Route path="/" element={<Home />} />
          <Route path="/:Resource/:id" element={<Display />} />
          <Route path="/error" element={<Error />} />

        </Routes>
      </fieldset>
    </fieldset>
  );
}

export default App;
