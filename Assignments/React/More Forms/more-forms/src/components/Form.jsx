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

        // create a javascript object to hold all of the values : to make us see data in console
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
                {firstName.length < 2 && firstName.length > 0 ? (
                    <p> First Name must be is more than 2 characters</p>
                ) : null}
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} />
                </div>
                {lastName.length < 2 && lastName.length > 0 ? (
                    <p> Last Name must be is more than 2 characters</p>
                ) : null}
                <div>
                    <label>Email : </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                {email.length < 5 && email.length > 0 ? (
                    <p> Email must be is more than 5 characters</p>
                ) : null}
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {password.length < 8 && password.length > 0 ? (
                    <p> password must be is more than 8 characters</p>
                ) : null}
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                {confirmpassword !== password  && confirmpassword.length > 0 ?(
                    <p> Confirm password must match with password</p>
                ) : null}
                
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
