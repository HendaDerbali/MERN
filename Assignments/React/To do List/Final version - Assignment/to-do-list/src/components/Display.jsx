import React from 'react';
//import styles from './Style.module.css';

const Display = (props) => {
    const {Task} = props // props

return (
    <div >
    {Task.map((item, index) => (
        <div key={index}> {item} </div>
    
    ))}
    </div>
);
};

export default Display;
