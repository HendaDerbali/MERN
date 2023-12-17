import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


export const DisplayAll = (props) => {

    const { allAuthors, setAllAuthors } = props;


    // Get All Products and display them in list  later in Return 
    useEffect(() => {
        axios.get("http://localhost:5000/api/author")
            .then(res => {
                console.log(res)
                console.log(res.data)
                setAllAuthors(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [setAllAuthors])

    //Delete one product using btn delete :  in the display all route
    const DeleteThisAuthor = (deleteId) => {
        axios.delete("http://localhost:5000/api/author/" + deleteId)
            .then(res => {
                console.log(res)
                console.log(res.data)
                //Filter with new list of products taht does not contains deleteId
                const filteredAuthors = allAuthors.filter((eachAuthor) => {
                    return eachAuthor._id !== deleteId
                })
                //Update Product List after the successfull deletion of one product(does not contains deleteId)
                setAllAuthors(filteredAuthors)
            })
            .catch(err => {
                console.log(err)
            })
    }





    return (
        <div>
            {/* Link To redirect to create component :  */}
            <Link to={`/authors/new`} style={{ textAlign: 'left', display: 'block' }}>Add an author</Link>


            {/* map all authors using table Bottstrap */}
            {/* Look at App.css to show this style added to color this text */}
            {/* <h4 className="color1 text-left">We Have quotes by :</h4> */}
            <h4 style={{ textAlign: 'left', color: '#6b0080' }}>We Have quotes by :</h4>

            <Table striped bordered hover>
                <thead >
                    <tr>
                        <th>Authors</th>
                        <th>Actions available</th>
                    </tr>
                </thead>

                <tbody>
                    {allAuthors.map((oneAuthor, index) => (
                        <tr key={oneAuthor._id || index}>
                            <td>{oneAuthor.Name}</td>
                            <td>
                                <Link to={`/authors/${oneAuthor._id}/edit`} ><Button variant="secondary">Edit</Button>  </Link>
                                <Button variant="danger" className="mx-3" onClick={() => { DeleteThisAuthor(oneAuthor._id) }}>Delete</Button>
                            </td>

                        </tr>

                    ))}
                </tbody>
            </Table>
        </div>
    )
}


export default DisplayAll;
