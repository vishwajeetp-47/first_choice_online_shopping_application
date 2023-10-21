import React, {useEffect, useState} from 'react';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false); // State variable for order placed message

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    const addItemToCart = (item) => {
        const updatedCart = [
            ...cartItems,
            item
        ];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const removeItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCartItems(updatedCart);
    };

    const clearCart = () => {
        localStorage.removeItem('cart');
        setCartItems([]);
    };

    const placeOrder = () => {
        const confirmOrder = window.confirm('Are you sure you want to place this order?');
        if (confirmOrder) {
            sendData();
            clearCart();
            setOrderPlaced(true);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };


    // console.log(" "+localStorage.getItem('cart'));
     const cart=localStorage.getItem('cart')
    // cartItems.map(v=>{
    //     console.log("productid="+v);
    // })



    let pid;
    cartItems.map(v=>{
        pid=v.p_id;
         })
         //console.log("pid"+pid)
    const cid = JSON.parse(localStorage.getItem("loggedCustomer")).c_id;
    const address=JSON.parse(localStorage.getItem("loggedCustomer")).address;
   // console.log(address)
    const date=new Date();
    
    //console.log(date)
    const price=calculateTotal().toFixed(2);
    //console.log(price)
    const sendData = (e) => {
        // e.preventDefault();
        // console.log(" "+localStorage.getItem('cart'));
        //console.log(" "+cart);
       // console.log("in sendata "+price,pid);
        const reqOptions = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
           p_id: pid,
           shipping_address: address,
           c_id: cid,
           order_date: date,
           total_amount: price
          //  pwd: pwd
        })
        };
    
        fetch("http://localhost:8080/placeOrder", reqOptions)
          .then((resp) => {
            if (resp.ok) 
                alert("Order placed successfully");
            else throw new Error("server error");
          })
          .catch((error) =>
            alert("Server error. Try Later" + error)
          );
      };







    

    return (
        <div className="container-fluid mt-5 col-8 fw-bold border bg-white text-dark">
            <h2>Your Shopping Cart</h2>
            {
            cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Brand</th>
                                <th>Size</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody> {
                            cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{
                                        index + 1
                                    }</td>
                                    <td>{
                                        item.p_name
                                    }</td>
                                    <td>₹{
                                        item.price
                                    }.00</td>
                                    <td>{
                                        item.c_id.c_name
                                    }</td>
                                    <td>{
                                        item.b_id.b_name
                                    }</td>
                                    <td>{
                                        item.s_id.size
                                    }</td>
                                    <td>
                                        <button onClick={
                                                () => removeItem(index)
                                            }
                                            className="btn btn-link">Remove</button>
                                    </td>
                                </tr>
                            ))
                        } </tbody>
                    </table>
                    <div className="text-right">
                        <p>
                            <strong>Total: ₹{
                                calculateTotal().toFixed(2)
                            }</strong>
                        </p>
                        <button onClick={clearCart}
                            className="btn btn-danger">Clear Cart</button>
                        <button onClick={placeOrder}
                            className="btn btn-success ml-2">Place Order</button>
                    </div>
                </>
            )
        }
            {
            orderPlaced && (
                <p className="text-success">Your order has been placed successfully!</p>
            )
        } </div>
    );
}
