import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Nbr = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const isNumber = !isNaN(id);

  return (
    <div>
      {isNumber ? (
        <p>The number is: {id}</p>
      ) : (
        id ? <p>{id}</p> : navigate("/Word/")
      )}
    </div>
  );
};

export default Nbr;
