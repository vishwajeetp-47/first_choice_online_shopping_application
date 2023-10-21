import React from "react";
import {useState, useEffect} from 'react';

export default function ViewVendor() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/getallvendor")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.error('Error:', error));
    }, []);

    const approve = (l_id) => {
        console.log("In approve method")
        console.log(l_id.login_id)
        fetch("http://localhost:8080/approveVendor?l_id=" + l_id.login_id)
        .then(resp => resp.json()).then(obj => {
            console.log("in aprove   "+JSON.stringify(obj))
            if (obj) {
                alert("Updation done")
                // nav("/admin_home/approveTour")
                 window.location.reload();
            } else 
                alert("Updation failed")

            

        })
    }

    const reject = (l_id) => {
        console.log("In approve method")
        console.log(l_id.login_id)
        fetch("http://localhost:8080/rejectVendor?l_id=" + l_id.login_id)
        .then(resp => resp.json()).then(obj => {
            console.log("in aprove   "+JSON.stringify(obj))
            if (obj) {
                alert("Updation done")
                // nav("/admin_home/approveTour")
                 window.location.reload();
            } else 
                alert("Updation failed")

            

        })
    }
    return (
        <div>

            <div className="container-fluid mt-100 col-8 border bg-white ">
                <h2 className="text-center">
                    <b>Vendor Details</b>
                </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">Vendor Id</th>
                            <th className="text-center">Uid</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Contact</th>
                            <th className="text-center">Address</th>
                            <th className="text-center">Shop_Licence_Id</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">
                                Approve</th>
                            <th className="text-center">Reject</th>

                        </tr>
                    </thead>
                    <tbody> {
                        data.map(v => (
                            <tr key={
                                v.v_id
                            }>
                                <td className="text-center">
                                    {
                                    v.v_id
                                }</td>
                                 <td className="text-center">
                                    {
                                    v.l_id.uid
                                }</td>
                                <td className="text-center">
                                    {
                                    v.v_name
                                }</td>
                                <td className="text-center">
                                    {
                                    v.email
                                }</td>
                                <td className="text-center">
                                    {
                                    v.contact
                                }</td>
                                <td className="text-center">
                                    {
                                    v.address
                                }</td>
                                <td className="text-center">
                                    {
                                    v.shop_licence_id
                                }</td>
                                <td className="text-center">
                                    {
                                     v.l_id.status === true ? "Approved" : "Rejected"
                                }</td>
                                <td>
                                    <button className='btn btn-primary  mx-2'
                                        onClick={
                                            () => {
                                                approve(v.l_id)
                                            }
                                    }>Approve</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger  mx-2'
                                        onClick={
                                            () => { reject(v.l_id)}
                                    }>Reject</button>
                                </td>

                            </tr>
                        ))
                    } </tbody>
                </table>
            </div>
        </div>

    );
}
