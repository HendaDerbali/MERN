import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';




export const Update = () => {
    //Navigation and Use UseParam
    const nav = useNavigate()
    const { id } = useParams()

    const [thisProduct, setThisProduct] = useState(null)
    const [allProducts, setAllProducts] = useState([]);





    //Step 01: Get One Product and display later list
    useEffect(() => {
        // axios.get("http://localhost:5000/api/product/" + id)   use this or the next ( same thing)
        axios.get(`http://localhost:5000/api/product/${id}`)
            .then(res => {
                console.log(res.data)
                setThisProduct(res.data)
                // Initialize inputObject with data of the product id that we fetch it
                setInputObject({
                    Title: res.data.Title,
                    Price: res.data.Price,
                    Description: res.data.Description,
                });
            })
            .catch(err => {
                console.log(err)
            })

    }, [id])




    //Step 2:  Update function and form update : 
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

    const updateHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:5000/api/product/${id}`, inputObject)
            .then((res) => {
                console.log(res.data);
                // Add to new value to the List , without refresh
                setAllProducts([...allProducts, res.data]);
                console.log('Updated allProducts:', allProducts);
                //set post request to "" to clear our Form after sucessfully submission 
                setInputObject({
                    Title: '',
                    Price: '',
                    Description: ''
                    // may be we have to redirect it if neede : use useNavigate
                })
                nav("/products")
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
            <Form onSubmit={updateHandler}>
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
    )
}

export default Update