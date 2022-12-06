import React, { useContext } from 'react';
import { GlobalContext } from './App';
import {Link} from 'react-router-dom';

const Cart = () => {

    const localStore = useContext(GlobalContext);
    const {store, setStore} = localStore;

    return (
        <div className='row'>
            <div className='col-12'>
                <table className='table table-responsive table-striped'>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            store.cartTemp && store.cartTemp.map((item, index) => (
                                <tr>
                                    <td>{index}</td>
                                    <td>{item.title}</td>
                                    <td><img src={item.image} alt="" style={{width: '50px', height: 'auto'}}/></td>
                                    <td>{item.price}</td>
                                    <td><button>Remove from cart</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <br></br>
                <Link to="/home" className='btn btn-info'>Continue Shopping</Link>
                <Link to="/checkout" className='btn btn-success'>Proceed to Checkout</Link>
            </div>
        </div>
    )
}

export default Cart


//HW
//Total of prices
//remove product on cart page