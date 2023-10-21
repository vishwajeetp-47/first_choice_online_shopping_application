import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react';
import ViewProductCustomer from './ViewProductCustomer';


export default function CustomerHome() {


    const [user, setUser] = useState();

    useEffect(() => {
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
      const uid=loggedUser.uid;
      const pwd=loggedUser.pwd;
      fetch("http://localhost:8080/loginCheck", {
      method: "POST",
      body: JSON.stringify({
          uid:""+uid,
          pwd:""+pwd
      }),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  })
  .then(response => response.json())
  .then(json => /*console.log(json.login_id)*/
     fetch("http://localhost:8080/getCustomerbyid?login_id="+json.login_id)
     .then(response=>response.json())
     .then(json=> setUser(json))
     
  )}, []);
  localStorage.setItem("loggedCustomer",JSON.stringify(user))  


    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link to="/" className='nav-link px-3'>
                                <b className='text-warning'>First Choice</b>
                            </Link>
                            <li className="nav-item ">
                                <Link to="/c_home" className='nav-link px-3'>Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/c_Cart" className='nav-link px-3'>View Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/c_wallet" className='nav-link px-3'>View Wallet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/c_profile" className='nav-link px-3'>My Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/c_orders" className='nav-link px-3'>My Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" className='nav-link px-3'>Logout</Link>
                            </li>
                            <li>
                                <h3>_____________________________________</h3>
                            </li>
                            <li className='text-right'>
                                <h3 className='text-success'>Welcome { user && user.c_name}
                                </h3>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ViewProductCustomer/>


        </div>
    )
}
