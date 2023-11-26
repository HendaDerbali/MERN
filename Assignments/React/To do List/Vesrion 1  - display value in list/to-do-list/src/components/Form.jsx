// Form.jsx

import React from 'react';

const Form = (props) => {
console.log(props);

return (
    <div>
    <select name="" id="">
        {props.ExistingTask.map((item, index) => (
            <option key={index} value={item.Task}>{item.Task}</option>
        ))}
    </select>



    
    </div>

);
};

export default Form;
