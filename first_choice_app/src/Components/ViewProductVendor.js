import React, { useEffect, useState } from 'react';

export default function ViewProductVendor() {
    const [data, setData] = useState([]);
    const v_id = JSON.parse(localStorage.getItem("loggedVendor")).v_id;

    useEffect(() => {       
        fetch("http://localhost:8080/getAllProductOfVendor?v_id=" + v_id)           
        .then(resp => resp.json())
        .then((obj) => {
            if (obj) {
                setData(obj); // Fix: Set the fetched data to the state
            }
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }, [v_id]); // Fix: Include v_id in the dependency array

    return (
        <div className="container-fluid mt-5 col-8 border bg-white ">
            <h2 className="text-center">
                <b>Product Details</b>
            </h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="text-center">Product Id</th>
                        <th className="text-center">Product Name</th>
                        <th className="text-center">Product Image</th>
                        <th className="text-center">Product Description</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Size</th>
                        <th className="text-center">Brand</th>
                        <th className="text-center">Category Name</th>
                        <th className="text-center">Vendor Name</th>
                        <th className="text-center">Delete Product</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((v) => (
                        <tr key={v.p_id}>
                            <td>{v.p_id}</td>
                            <td>{v.p_name}</td>
                            <td style={{ width: '15%' }}>
                <img
                  src={`data:image/png;base64,${v.p_image}`}
                  alt="Product"
                  className="img-thumbnail"
                  style={{ width: '400px', height: '200px' }}
                />
              </td>
                            <td>{v.p_desc}</td> {/* Adjust property name */}
                            <td>{v.price}</td>
                            <td>{v.s_id.size}</td>
                            <td>{v.b_id.b_name}</td>
                            <td>{v.c_id.c_name}</td>
                            <td>{v.v_id.v_name}</td>
                            <td>Delete Button</td> {/* Add delete button */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
