import React from 'react';
    
const PersonCard = (props) => {
    // const firstName = "Doe"
    // const lastName = "Jane"
    // const age = 45
    // const hairColor = "Black"
    return (
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}
    
export default PersonCard;
