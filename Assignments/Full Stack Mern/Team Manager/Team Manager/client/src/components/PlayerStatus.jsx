import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Form, Link } from 'react-router-dom';
import NavGame from './NavGame';
import { useParams } from 'react-router-dom';
import '../App.css';

export const PlayerStatus = (props) => {
  const { allPlayers, setAllPlayers } = props;
  const { gameId } = useParams();

  const [changeRequest, setChangeRequest] = useState(false);




  // Get All Players and display them in list  later in Return 
  useEffect(() => {
    axios.get("http://localhost:5000/api/player")
      .then(res => {
        console.log(res)
        console.log(res.data)
        setAllPlayers(res.data)
      })
      .catch(err => {
        console.log(err)
      })

  }, [changeRequest])  //This is added because i cant see chnage of btn , only in case of refresh



  // Update status btn after Click :
  const handleChangeGameStatus = (idFromBelow, newStatus) => {
    console.log("Handling game status change...", idFromBelow, newStatus);

    const updatedPlayer = {
      PlayerStatusGame1: newStatus,
    };
    axios
      .patch(`http://localhost:5000/api/player/${idFromBelow}`, updatedPlayer)
      .then((res) => {
        console.log("Patch request successful:", res);
        setChangeRequest(!changeRequest);

      })
      .catch((err) => console.log("Error in patch request:", err.response));
  };






  return (

    <div>
      <NavGame gameId={gameId} />

      <Table striped bordered hover>
        <thead >
          <tr>
            <th>Team Name</th>
            <th>Actions</th>

          </tr>
        </thead>

        <tbody>
          {allPlayers.map((onePlayer, index) => (
            <tr key={onePlayer._id || index}>
              <td>{onePlayer.Name}</td>
              <td>
          {/* Initialize status btn and Onclick event to change style of btn after click  */}
                <button
                  className={`${onePlayer.PlayerStatusGame1 === "Playing"
                    ? "PlayingDefaultBtn"// if Status = palyin then : style... else style :""
                    : ""
                    }`}
                  onClick={() =>
                    handleChangeGameStatus(onePlayer._id, "Playing")
                  }
                >
                  Playing
                </button>


                <button
                  className={`mx-3 ${onePlayer.PlayerStatusGame1 === "Not Playing"
                    ? "NotPlayingDefaultBtn"// if Status = palyin then : style... else style :""
                    : ""
                    }`}

                  onClick={() =>
                    handleChangeGameStatus(onePlayer._id, "Not Playing")
                  }

                >


                  Not Playing
                </button>


                <button
                  className={`mx-3 ${onePlayer.PlayerStatusGame1 === "Undecided"
                    ? "UndecidedDefaultBtn"// if Status = palyin then : style... else style :""
                    : ""
                    }`}

                  onClick={() =>
                    handleChangeGameStatus(onePlayer._id, "Undecided")
                  }

                >

                  Undecided</button>
              </td>

            </tr>

          ))}
        </tbody>
      </Table>


    </div>
  )
}



export default PlayerStatus;
