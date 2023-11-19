import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");


    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // create a javascript object to hold all of the values
        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmpassword: confirmpassword
        };
        console.log("Welcome", newUser);
    };

    return (
        <div>

            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Email : </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>First Name :  {firstName} </p>
                <p>Last Name :  {lastName} </p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Confirm Password : {confirmpassword}</p>
            </div>
        </div>
    )



};



export default Form;
