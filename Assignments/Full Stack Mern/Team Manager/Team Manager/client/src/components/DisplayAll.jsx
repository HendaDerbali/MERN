
import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';



export const DisplayAll = (props) => {
    const { allPlayers, setAllPlayers } = props;

    // const { gameIdFromParams } = useParams(); // Get gameId from route parameters
    const [gameId, setGameId] = useState("1");




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

    }, [setAllPlayers])




    return (
        <div>
            {/* List /Add Player : */}
            <h1>
                <span > Manage Player |  <Link to={`/status/game/${gameId}`} >Manage Player Status</Link></span>
            </h1>
            <h2>
                <span> List |  <Link to={`/players/addplayer`} >Add Player</Link></span>
            </h2>


            <Table striped bordered hover>
                <thead >
                    <tr>
                        <th>Team Name</th>
                        <th>Prefered Position</th>
                        <th>Actions</th>

                    </tr>
                </thead>

                <tbody>
                    {allPlayers.map((onePlayer, index) => (
                        <tr key={onePlayer._id || index}>
                            <td>{onePlayer.Name}</td>
                            <td>{onePlayer.PreferedPosition}</td>
                            {/* <td>
                                <Link to={`/authors/${onePlayer._id}/edit`} ><Button variant="secondary">Edit</Button>  </Link>
                                <Button variant="danger" className="mx-3" onClick={() => { DeleteThisAuthor(onePlayer._id) }}>Delete</Button>
                            </td> */}

                        </tr>

                    ))}
                </tbody>
            </Table>


        </div>
    )
}



export default DisplayAll;
