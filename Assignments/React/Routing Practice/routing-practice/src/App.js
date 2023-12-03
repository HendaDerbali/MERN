import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Nbr  from './components/Nbr';
import Word from './components/Word';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <fieldset className="App">
      <legend>App.jsx</legend>
      {/* Links :  */}
      {/* <Link to="/home" ></Link>
      <Link to={"/{id}"} ></Link>
      <Link to={"/word/{color}/{backgroundColor}"} ></Link> */}




      {/* Rooutes : Masra7 */}
      <Routes>
        {/* Act1 */}
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Nbr />} />
        <Route path="/:word/:color/:backgroundColor" element={<Word />} />

      </Routes>

      
        
      </fieldset>
  );
}

export default App;
