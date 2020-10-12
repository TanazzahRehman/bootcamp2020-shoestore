import React from 'react';
import {
    //BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

function ProductIndex (){
    const shoes = {
        "WN7090_Black":{
            name: "BLACK COLOR WINTER COURT SHOES",
            img: "https://cdn-images-fishry.azureedge.net/product/WN709001--4--6bdfbd2-stylo.jpg",
            pkr: "3,800 PKR"
        },
        "WN7088_Black":{
            name: "BLACK COLOR SCALY COURT SHOES ",
            img: "https://cdn-images-fishry.azureedge.net/product/WN708801--3--3ca8355-stylo.jpg",
            pkr: "3700 PKR"
        },
        "WN7089_Silver":{
            name: "SILVER COLOR WINTER COURT SHOES",
            img: "https://cdn-images-fishry.azureedge.net/product/WN708916--3--a1023d8-stylo.jpg",
            pkr: "4000 PKR"
        },
        "WN7089_Golden":{
            name: "GOLDEN COLOR WINTER COURT SHOES",
            img: "https://cdn-images-fishry.azureedge.net/product/WN708915--3--9566502-stylo.jpg",
            pkr: "4500 PKR"
        },
    }
    console.log(shoes)
    return(
        <ul>
            {Object.entries(shoes).map(([productID, {name, img, pkr}])=>(
                <li key = {productID}>
                    <Link to={`/products/${productID}`}>
                       <h2>{name}</h2>
                       <h4>{pkr}</h4>
                       <img src={img} alt={name} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ProductIndex;