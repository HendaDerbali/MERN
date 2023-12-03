import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Home = () => {
const [id, setId] = useState("");
const [Resource, setResource] = useState("");

const nav = useNavigate() // to navigate to specific url after submt btn 


    const submitHandler = (e) => {
        e.preventDefault();
        // Console log
        console.log("Form submitted with ID:", id);
        console.log("Resource submitted with ID:", Resource);
        nav("/" + Resource +"/"+ id)


    };
    return (
        <Form onSubmit={submitHandler} className="mb-3">
            <Form.Group className="mb-3" controlId="formId">
                <Form.Label>ID</Form.Label>
                <Form.Control type="number"  onChange={(e) => setId(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formResource">
                <Form.Label>Search For</Form.Label>
                <Form.Select onChange={(e) => setResource(e.target.value)}>
                    <option value=""> </option>
                    <option value="people">people</option>
                    <option value="planets">planets</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
};

export default Home;
