import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export const DisplayAll = (props) => {
    const { allProducts, setAllProducts } = props;

    // Get All Products and display them in list   
    useEffect(() => {
        axios.get("http://localhost:5000/api/product")
            .then(res => {
                console.log(res.data)
                setAllProducts(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [setAllProducts])


    //Delete one product using btn delete :  in the display all route
    const DeleteThisProduct = (deleteId) => {
        axios.delete("http://localhost:5000/api/product/" + deleteId)
            .then(res => {
                console.log(res.data)
                //Filter with new list of products taht does not contains deleteId
                const filteredProducts = allProducts.filter((eachProduct) => {
                    return eachProduct._id !== deleteId
                })
                //Update Product List after the successfull deletion of one product(does not contains deleteId)
                setAllProducts(filteredProducts)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <h1>All Products :</h1>
            {
                allProducts.map((oneProduct, index) => {
                    return (
                        <div key={oneProduct._id || index}>
                            <ul>
                                <li>
                                    <Link to={`/products/${oneProduct._id}`} >{oneProduct.Title}</Link>
                                </li>
                                
                                {/* Delete btn with React Bootstrap*/}
                                <li>
                                    <Button variant="danger" onClick={() => { DeleteThisProduct(oneProduct._id) }}> Delete</Button>
                                </li>

                                {/* Update btn with React Bootstrap => It will use Update component*/}
                                <li>
                                    <Link to={`/product/edit/${oneProduct._id}`}>
                                        <Button variant="warning">Update</Button>
                                    </Link>

                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default DisplayAll;

