
import {useEffect, useState} from 'react';
import React from 'react';

export default function ProductOutOfStockVendor() {

    const [products, setProducts] = useState([]);
    const v_id = JSON.parse(localStorage.getItem("loggedVendor")).v_id;
    useEffect(() => {
      fetch("http://localhost:8080/getOutOfstock?v_id="+v_id)
      .then(resp => resp.json())
      .then((obj) => {
          if(obj)
          {  
              console.log("Products= "+obj);
              setProducts(obj);
          }
          else{
            alert("Currently No Products out of Stock");
        }})
     }, []);


    return(
        <div>
        <h1>Product List</h1>
        <table border={1}>
          <thead>
            <tr>
              <th  width="200" hight="400">Product_id</th>
              <th  width="200" hight="400">Product Name</th>
              <th  width="200" hight="400">Category</th>
              <th  width="200" hight="400">Brand</th>
              <th  width="200" hight="400">Size</th>
              <th  width="200" hight="400">Price</th>
              <th  width="200" hight="400">Image</th>
              <th  width="200" hight="400">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.p_id}>
                <td>{product.p_id}</td>
                <td>{product.p_name}</td>
                <td>{product.c_id.c_name}</td>
                <td>{product.b_id.b_name}</td>
                <td>{product.s_id.size}</td>
                <td>{product.price}</td>
                <td><img src={`data:image/jpeg;base64,${product && product.p_image}`} height={250} width={250}  alt="product"/></td>
                <td>{product.quantity}</td>
               {/*<td> {JSON.stringify(product)}</td>*/}
              </tr>
            ))}
          </tbody>  
        </table>
      </div> 
    )
}