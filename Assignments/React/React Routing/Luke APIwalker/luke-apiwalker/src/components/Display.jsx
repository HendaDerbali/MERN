import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'
import Home from './Home';



const Display = () => {
    const [Display, setDisplay] = useState([])

    //useParam :
    const { id } = useParams()
    const { Resource } = useParams()
    // useNavigate : to navigate to error components :
    const nav = useNavigate()





    //!------------------------- UseEffect
    useEffect(() => {
        Axios.get(`https://swapi.dev/api/${Resource}/${id}`)
            .then((response) => {
                // Axios Wraps everything in .data
                console.log([response.data]);
                setDisplay([response.data]);

            })
            .catch((err) => {
                console.log(err);
                nav("/Error/")


            });
    }, [id, Resource]);

    return (
        <div>
            {Display.map((item, index) => (
                <div key={index}>
                    {Resource === "people" && (
                        <div>
                            <h1>Name: {item.name}</h1>
                            <p>Height: {item.height}</p>
                            <p>Hair Color: {item.hair_color}</p>
                            <p>Eye Color: {item.eye_color}</p>
                            <p>Skin Color: {item.skin_color}</p>
                        </div>
                    )}
                    {Resource === "planets" && (
                        <div>
                            <h1>Name: {item.name}</h1>
                            <p>Climate: {item.climate}</p>
                            <p>Terrain: {item.terrain}</p>
                            <p>Sarface Water: {item.surface_water}</p>
                            <p>Popolation: {item.population}</p>
                        </div>
                    )}                </div>
            ))}
        </div>
    );


};

export default Display;
