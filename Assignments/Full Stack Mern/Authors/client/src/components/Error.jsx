import React from 'react'
import { Link } from 'react-router-dom';

export const Error = () => {
return (
    <div>
        <p>We're sorry, but we could not find the author you are looking for with this. Would you like to add this author to our database?</p>
        <Link to={`/authors/new`} >Click Me to Create an author</Link>

    </div>
)
}


export default Error;
