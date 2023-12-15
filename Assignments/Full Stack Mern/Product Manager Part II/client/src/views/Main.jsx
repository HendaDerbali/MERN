import React from 'react'
import DisplayAll from '../components/DisplayAll';
import Create from '../components/Create';
import { useState } from 'react';





export const Main = () => {
  const [allProducts, setAllProducts] = useState([]);

  
  return (
    <div>
        <Create allProducts={allProducts} setAllProducts = {setAllProducts}/>
        <DisplayAll  allProducts={allProducts} setAllProducts = {setAllProducts}/>


    </div>
  )
}
export default Main;

