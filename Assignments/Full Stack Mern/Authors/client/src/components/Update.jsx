import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'



export const Update = () => {

    //Navigation and Use UseParam
    const nav = useNavigate()
    const { id } = useParams()

    const [thisAuthor, setThisAuthor] = useState(null)
    const [allAuthors, setAllAuthors] = useState([]);


    //Step 01: Get One Author and display later in  list
    useEffect(() => {
        // axios.get("http://localhost:5000/api/author/" + id)   use this or the next ( same thing)
        axios.get(`http://localhost:5000/api/author/${id}`)
            .then(res => {
                console.log(res.data)
                setThisAuthor(res.data)
                // Initialize inputObject with data of the product id that we fetch it
                setInputObject({
                    Name: res.data.Name,
                });
            })
            .catch(err => {
                console.log(err)
                // If we have to add component Error in case of user enter id that nor exist in our DB
                nav(`/authors/${id}/Error`);
            })

    }, [id])

    //Step 2:  Update function and form update : 
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

    const updateHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:5000/api/author/${id}`, inputObject)
            .then((res) => {
                // this cosole log is to show me the structure of my API response , si i use after that : res.data   or res.data.newProduct
                console.log('My API response is', res)
                console.log('My data in API response contains ', res.data);
                console.log('My new Object is located hier and  it is :', res.data.newAuthor);
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
            <Link to={`/authors`} style={{ textAlign: 'left', display: 'block' }}>Home</Link>
            <h4 style={{ textAlign: 'left', color: '#6b0080' }}>Edit This Author</h4>


            <Form onSubmit={updateHandler}>
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
    )
}


export default Update;
