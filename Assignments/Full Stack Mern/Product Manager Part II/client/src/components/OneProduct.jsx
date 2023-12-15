import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export const OneProduct = () => {
    const { id } = useParams()
    const [thisProduct, setThisProduct] = useState()

    useEffect(() => {
        axios.get("http://localhost:5000/api/product/" + id)
            .then(res => {
                console.log(res.data)
                setThisProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])





    return (
        <div>

            {thisProduct ?
                <ul>
                    <li> {thisProduct.Title} </li>
                    <li> {thisProduct.Description} </li>
                    <li> {thisProduct.Price} </li>
                </ul> : <h3>Loading</h3>
            }
        </div>
    )
}

export default OneProduct