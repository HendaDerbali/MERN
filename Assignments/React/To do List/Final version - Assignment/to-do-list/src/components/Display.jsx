import React from 'react';
//import styles from './Style.module.css';

const Display = (props) => {
return (
    <div >
    {props.Task.map((item, index) => (
        <div key={index}> {item} </div>
    
    ))}
    </div>
);
};

export default Display;
