import React, { useReducer, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function AddProduct() {

    const init = {
      p_name: "",
      p_desc: "",
      price: "",
      s_id:0,
      b_id:0,
      c_id:0,
      quantity: ""
    };
  
    const reducer = (state, action) => {
      switch (action.type) {
        case "update":
          return { ...state, [action.fld]: action.val };
        case "reset":
          return init;
        default:
          return state;
      }
    };
  
    const [info, dispatch] = useReducer(reducer, init);
    const [file, setFile] = useState();
    const navigate = useNavigate();
    
    
    const v_id = JSON.parse(localStorage.getItem("loggedVendor")).v_id;
    
    
    

    const sendData = (e) => {
      e.preventDefault();
      const reqOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
         ...info,
         v_id: v_id
        //  pwd: pwd
      })
      };
  
      fetch("http://localhost:8080/addProduct", reqOptions)
        .then((resp) => {
          if (resp.ok) return resp.json();
          else throw new Error("server error");
        })
        .then((obj) => {
          const fd = new FormData();
          fd.append("file", file);
          const reqOptions1 = {
            // mode: "no-cors",
            method: "POST",
            body: fd,
          };
          fetch(
            "http://localhost:8080/uploadImage/" + obj.p_id,
            reqOptions1
          )
            .then((resp) => resp.json())
            .then((obj) => {
              if (obj) {
                alert("Image uploaded successfully");
                navigate("/");
              } else {
                alert(
                  "Reg Successful. Image is not Updated, Try Later"
                );
                navigate("/");
              }
            });
          alert("Product added successfully..");
          navigate("/");
        })
        .catch((error) =>
          alert("Server error. Try Later" + error)
        );
    };


    const [allcat,setAllcat]=useState([]);

      useEffect(()=>{
    
              fetch("http://localhost:8080/getallcategory")
              .then((resp)=>resp.json())
              .then (cat=>setAllcat(cat));
    
    
      },[])
      const [allBrand,setAllbrand]=useState([]);

      useEffect(()=>{
    
              fetch("http://localhost:8080/getallbrands")
              .then((resp)=>resp.json())
              .then (brand=>setAllbrand(brand));
    
    
      },[])

      const [allSize,setAllsize]=useState([]);

      useEffect(()=>{
    
              fetch("http://localhost:8080/getallsizes")
              .then((resp)=>resp.json())
              .then (siz=>setAllsize(siz));
    
    
      },[])
  
    return (
      <div className="container-fluid mt-5 col-5 fw-bold border bg-white text-dark">
      <form className="container-sm">
        <div className="col-md-6">
                  <label htmlFor="c_id">Select category:</label>
                  <select className="form-select" id="c_id" name="c_id" 
                  onChange={(e)=>{dispatch({type:'update',fld:'c_id',val:e.target.value})}} >
                      {
                              allcat.map(sp=>{
                                return <option value={sp.c_id}>{sp.c_name}</option>
                              })
                        }
                  </select>
        </div>
          <div className="col-md-6">
            <label htmlFor="productname">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productname"
              name="p_name"
              value={info.p_name}
              required
              onChange={(e) =>
                dispatch({
                  type: "update",
                  fld: "p_name",
                  val: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description:</label> 
                <input type="text" className="form-control" id="desc" name=" p_desc" value={info. p_desc}
                 onChange={(e)=>dispatch({type: 'update', fld: 'p_desc', val: e.target.value})} />
          </div>

          <div className="col-md-6">
                  <label htmlFor="brand">Select Brand:</label>
                  <select className="form-select" id="brand" name="b_name" 
                  onChange={(e)=>{dispatch({type:'update',fld:'b_name',val:e.target.value})}} >
                      {
                              allBrand.map(sp=>{
                                return <option value={sp.b_id}>{sp.b_name}</option>
                              })
                        }
                  </select>
        </div>
          
           <div className="col-md-6">
                  <label htmlFor="s_id">Select Size:</label>
                  <select className="form-select" id="s_id" name="s_id" 
                  onChange={(e)=>{dispatch({type:'update',fld:'s_id',val:e.target.value})}} >
                      {
                              allSize.map(sp=>{
                                return <option value={sp.s_id}>{sp.size}</option>
                              })
                        }
                  </select>
        </div>


         
          <div className="mb-3">
                <label htmlFor="qty" className="form-label">Quantity:</label> 
                <input type="text" className="form-control" id="qty" name="quantity" value={info.quantity}
                 onChange={(e)=>dispatch({type: 'update', fld: 'quantity', val: e.target.value})} />
          </div>
          <div className="col-md-6">
            <label htmlFor="price">Price</label>
            <input type="text" className="form-control" id="price" name="price" value={info.price} 
            onChange={(e) =>dispatch({type: "update",fld: "price",val: e.target.value,})}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">
            Product Image:
            </label>
            <input type="file" className="form-control" id="image" name="image"
              onChange={(e)=>setFile(e.target.files[0])}  ></input> 
          </div>              
                <div>
                <button type="submit" className="btn btn-primary mx-2 " onClick={(e)=>{sendData(e)}}>upload Product</button>
                <button type="reset" className="btn btn-primary mx-2" onClick={()=>{dispatch({type:'reset'})}}>Clear</button>
                </div>
   
              </form>
              <p>{JSON.stringify(info)}</p>
              <p>{file && file.name}</p>
              {/* <h1 className='bg-danger text-white'>Welcome Vendor :{ps.v_name}</h1>  */}
  
             {/* <p>{JSON.stringify(info)}</p>*/}
          </div>
      )
  }

export default AddProduct;

