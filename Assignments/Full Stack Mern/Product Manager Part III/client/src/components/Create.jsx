import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'




const Create = (props) => {
    const { allProducts, setAllProducts } = props;

    const nav = useNavigate()



    const [inputObject, setInputObject] = useState({
        Title: '',
        Price: '',
        Description: ''
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
            .post('http://localhost:5000/api/product/', inputObject)
            .then((res) => {
                // this cosole log is to show me the structure of my API response , si i use after that : res.data   or res.data.newProduct
                console.log('My API response is', res)
                console.log('My data in API response contains ', res.data);
                console.log('My new Object is located hier and  it is :', res.data.newProduct);
                // Add to new value to the List , without refresh
                //Use : res.data.newProduct  because my data is stored in res.data.newProduct
                setAllProducts([...allProducts, res.data.newProduct]);
                console.log('New List of All products is :', [...allProducts, res.data.newProduct]);
                //set post request to "" to clear our Form after sucessfully submission 
                setInputObject({
                    Title: '',
                    Price: '',
                    Description: ''
                })
                // may be we have to redirect it if neede : use useNavigate
                nav("/")
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
            <Form onSubmit={SubmitHandler}>
                {errors.map((err, index) => (
                    <p key={index} className="text-danger">
                        {err}
                    </p>
                ))}
                <Form.Group>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control className="form-control" name="Title" onChange={handleInputs} value={inputObject.Title} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Price:</Form.Label>
                    <Form.Control className="form-control" name="Price" onChange={handleInputs} value={inputObject.Price} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description:</Form.Label>
                    <Form.Control className="form-control" name="Description" onChange={handleInputs} value={inputObject.Description} />
                </Form.Group>

                <Button variant="primary" type="submit">Create</Button>
            </Form>

        </div>
    );
};

export default Create;
