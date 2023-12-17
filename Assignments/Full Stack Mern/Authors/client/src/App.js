import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import DisplayAll from './components/DisplayAll';
import Create from './components/Create';
import Update from'./components/Update';
import Error from './components/Error';
import { Link, Route, Routes } from 'react-router-dom'


function App() {
  const [allAuthors, setAllAuthors] = useState([]); // it should be an array

  

  return (
    <div className="App">
    
      <Routes>

        {/* Display  page */}
        <Route path="/authors" element={<DisplayAll allAuthors={allAuthors} setAllAuthors={setAllAuthors} />} />
        {/* Create  page */}
        <Route path="/authors/new" element={<Create allAuthors={allAuthors} setAllAuthors={setAllAuthors} />} />
        {/* Update One Athor :  */}
        <Route path="/authors/:id/edit" element={<Update allAuthors={allAuthors} setAllAuthors={setAllAuthors} />} />
        {/* Error Route :  */}
        <Route path="/authors/:id/Error" element={<Error/>} />
      
      </Routes>
    </div>
  );
}

export default App;
