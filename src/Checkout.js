import React, { useState } from 'react'

const Checkout = () => {

    const [paymentStatus, setPaymentStatus] = useState(false);
    const [orderStatus, setOrderStatus] = useState(false);

    const paymentUpdate = () => {
        console.log('payment done');
        setPaymentStatus(true);
    }

    const placeOrder = () => {
        //api call to place order - false/true
        //cart, address, contact details, price details, payment details
        setOrderStatus(true);
    }

    return (
        <div className='row'>
            <div className='col-12'>
                Cart Details
                <br></br>
                Address Details - Complete Addrees (House No, Sector, City, State, Pincode, Contact No)
                <br></br>
                Payment Details
                <br></br>
                <button onClick={paymentUpdate}>Payment Done</button>
                <br></br><br></br><br></br>
                <button onClick={placeOrder}>Place Order</button>
                <br></br>

            </div>
            {orderStatus && (
                <div className="alert alert-success" role="alert">
                    Your order has been placed successfully.<br></br>
                    Estimated Delivery Day - 5 Days
                </div>)
            }
        </div>
    )
}

export default Checkout


//hw
//address or contact form
//login integration