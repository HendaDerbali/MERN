import React, { useState } from 'react';
import styles from './Style.module.css';


const Form = (props) => {
    const [newColor, setNewColor] = useState("")
    const [color, setColor] = useState([])



    const addColor = (e) => {
        e.preventDefault()

        //color.push(newColor) : dont use push 
        //color = [...color, newColor]
        //Use this to push values in array :

        // push new color 
        props.setColor([...props.color, newColor]);
        // console log
        console.log("The new color is successfully added", [...props.color, newColor]);
        
        // Cleaning up : trajja3 l input fergha ba3d submit
        setNewColor("")  // setNew color with empty string after submit
    };

    return (
        <div className={styles.con}>

            {/* {JSON.stringify(color)} */}
            {/* <form onSubmit={addColor}> */}
            <form onSubmit={ addColor } className={styles.con}>

                <div className={styles.show}>
                    <div >
                        <label>Color: </label>
                    </div>
                        <input type="text" value={newColor} onChange={(e) => setNewColor(e.target.value)} />
                    <div>
                        <button type="submit" className={styles.btn}>Add </button>
                    </div>
                </div>
            </form>

        </div>
    )
};

export default Form;
