import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom'
import DisplayAll from './components/DisplayAll';
import PlayerStatus from './components/PlayerStatus';


function App() {
  const [allPlayers, setAllPlayers] = useState([]); // it should be an array




  return (
    <div >
      <Routes>

        {/* Display  page */}
        <Route path="/players/list" element={<DisplayAll allPlayers={allPlayers} setAllPlayers={setAllPlayers} />} />
        {/* Create  page */}
        {/* Update One Athor :  */}
        {/* Error Route :  */}

         {/* Player Status :  */}
        <Route path="/status/game/:gameId" element={<PlayerStatus allPlayers={allPlayers} setAllPlayers={setAllPlayers} />} />


      </Routes>
    </div>
  );
}

export default App;
