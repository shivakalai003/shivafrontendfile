import React, { useEffect, useLayoutEffect, useState } from "react";

import Productcard from "../Components/shared/Productcard";

function Products() {
    const [Products,setproducts]=useState([])

    useLayoutEffect(()=>{

        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res)=>res.json())
        .then((data)=>setproducts(data));
    },[]);
return  (

    <div>
        {Products.map((Product)=>{
            
        return <Productcard Product={Product}/>;
        })}
      </div>
 );

}
        

    
    



export default Products;
