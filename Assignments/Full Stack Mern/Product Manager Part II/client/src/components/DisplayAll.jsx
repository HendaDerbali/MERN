import { useEffect } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const DisplayAll = (props) => {
    const { allProducts, setAllProducts } = props;

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
                    </ul>

                </div>
            )
        })
    }
</div>
)
}
export default DisplayAll;

