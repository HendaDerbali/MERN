import React from 'react';
import { useState } from 'react';  


const Person = (props) => {
    console.log(props);

    const  {firstName, lastName, age, hairColor}   = props
    const [varAge, setvarAge] = useState(age)

    return (  
        <div>
            <h1>{firstName}, {lastName}</h1>
{/* Display the current value of age from state (not the original value from the props object) */}

            <p>Age: {varAge}</p>
            <p>Hair Color: {hairColor}</p>

{/* Create a button that increases the person's age by 1 year each time it is clicked */}
        <button onClick={()=>setvarAge(varAge+1) }>Click Me to increase age by 1 yeaar</button>
                
    </div>
    )
console.log(props);

}


    
export default Person;
