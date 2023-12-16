import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'




export const OneProduct = () => {
    const { id } = useParams()
    const [thisProduct, setThisProduct] = useState(null)
    const nav = useNavigate()



    //Get One Product and display later list
    useEffect(() => {
        // axios.get("http://localhost:5000/api/product/" + id)   use this or the next ( same thing)
        axios.get(`http://localhost:5000/api/product/${id}`)
            .then(res => {
                console.log(res.data)
                setThisProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            
    }, [id])


    //Delete this one product : we use id because we are already navigate into the route of one product
    const DeleteThisProduct = () => {
        axios.delete(`http://localhost:5000/api/product/${id}`)
                .then(res => {
                console.log(res.data)
                // Update thisProduct state to null after successful deletion
                setThisProduct(null);
                //Redirect after deleteion(if requested")
                nav("/products")

            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>
            {thisProduct ? (
                <ul>
                    <li> {thisProduct.Title} </li>
                    <li> {thisProduct.Price} </li>
                    <li> {thisProduct.Description} </li>
                    {/* Delete btn with React Bootstrap: Don't use id because as we said we are already navigated in one Project page  */}
                    <Button variant="danger" onClick={() => DeleteThisProduct()}>Delete</Button>
                </ul>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    )

}

export default OneProduct