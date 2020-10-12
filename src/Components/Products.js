import React from 'react';
import {
    //BrowserRouter as Router,
    Outlet
  } from 'react-router-dom';

function Products (){
    return(
        <div>
          <h1> Products </h1>
          <Outlet />
        </div>
    )
}

export default Products;