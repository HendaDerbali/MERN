import React, { useState } from 'react';
//import styles from './Style.module.css';

const Form = (props) => {
    console.log(props);

const [newTask, setnewTask] = useState("")


const submitHandler = (e) => {
    e.preventDefault()
    props.setTask([...props.Task, newTask]);
    setnewTask("")
};
console.log([...props.Task, newTask]);



    return (
        <div >
            <form onSubmit={ submitHandler } >
                    <div >
                        <label>Color: </label>
                    </div>
                        <input type="text" value={newTask} onChange={(e) => setnewTask(e.target.value)} />
                    <div>
                        <button type="submit">Add </button>
                    </div>
            </form>

        </div>
    )
};

export default Form;
