import React from 'react';
import styles from './Style.module.css';

const Display = (props) => {
return (
    <div className={styles.show}>
      {/* Display our Colors */}
    {props.color.map((item, index) => (
        <div key={index} className={styles.box} style={{ backgroundColor: item }}></div>
    ))}
    </div>
);
};

export default Display;
