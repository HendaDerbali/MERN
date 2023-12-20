import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css';


export const NavGame = ({ gameId }) => {

    const [styleGame1, setStyleGame1] = useState({})
    const [styleGame2, setStyleGame2] = useState({})
    const [styleGame3, setStyleGame3] = useState({})

    const styleObjBold = {
        fontWeight: 800,
    };

    useEffect(() => {
        console.log("gameId:", gameId);
    
        if (gameId === "1") {
            setStyleGame1(styleObjBold);
            setStyleGame2({});
            setStyleGame3({});
        } else if (gameId === "2") {
            setStyleGame1({});
            setStyleGame2(styleObjBold);
            setStyleGame3({});
        } else if (gameId === "3") {
            setStyleGame1({});
            setStyleGame2({});
            setStyleGame3(styleObjBold);
        }
    }, [gameId]);
    



    return (
        <div>
            <Link to="/status/game/1" style={styleGame1}>
                Game 1
            </Link>
            <Link to="/status/game/2" style={styleGame2}>
                Game 2
            </Link>
            <Link to="/status/game/3" style={styleGame3}>
                Game 3
            </Link>
        </div>
    );
};


export default NavGame;
