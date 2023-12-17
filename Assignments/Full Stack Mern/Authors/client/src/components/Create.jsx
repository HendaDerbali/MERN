import React from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';





const Create = (props) => {
    const { allAuthors, setAllAuthors } = props;

    const nav = useNavigate()

    const [inputObject, setInputObject] = useState({
        Name: '',

    });
    const [errors, setErrors] = useState([]);


    const handleInputs = (e) => {
        setInputObject({
            ...inputObject,
            [e.target.name]: e.target.value
        });
    };



    const SubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/author/', inputObject)
            .then((res) => {
                // this cosole log is to show me the structure of my API response , si i use after that : res.data   or res.data.newProduct
                console.log('My API response is', res)
                console.log('My data in API response contains ', res.data);
                console.log('My new Object is located hier and  it is :', res.data.newProduct);
                // Add to new value to the List , without refresh
                //Use : res.data.newProduct  because my data is stored in res.data.newProduct
                setAllAuthors([...allAuthors, res.data.newAuthor]);
                console.log('New List of All products is :', [...allAuthors, res.data.newAuthor]);
                //set post request to "" to clear our Form after sucessfully submission 
                setInputObject({
                    Name: '',
                })
                // may be we have to redirect it if neede : use useNavigate
                nav("/authors")
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };




    return (
        <div>
            {/* Link To redirect to Home page :  */}
            <Link to={`/authors`} style={{ textAlign: 'left', display: 'block' }}>Home</Link>
            <h4 style={{ textAlign: 'left', color: '#6b0080' }}>Add a new author:</h4>

            <Form onSubmit={SubmitHandler}>
                {errors.map((err, index) => (
                    <p key={index} className="text-danger">
                        {err}
                    </p>
                ))}
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control className="form-control" name="Name" onChange={handleInputs} value={inputObject.Name} />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
                <Link to={`/authors`} ><Button variant="secondary" className="mx-3">Cancel</Button></Link>


            </Form>

        </div>
    );
};



export default Create;
