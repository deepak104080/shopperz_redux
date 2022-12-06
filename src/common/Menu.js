import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../App';

const Menu = () => {
  const localContext = useContext(GlobalContext);
    const {store, setStore} = localContext;

    const logoutFn = () => {
        setStore({
          ...store,
          loginStatus: false,
          userName: ''
      })
    }


  return (
    <div className='row'>
        <div className='col-8 bg-warning bg-opacity-50'>
            <Link className="btn btn-info" to="/home">Home</Link>
            <Link className="btn btn-warning" to="/category/jewellery">Jewellery</Link>
            <Link className="btn btn-primary" to="/category/men's clothing">Mens' Clothing</Link>
            <Link className="btn btn-info" to="/category/electronics">Electronics</Link>
            <Link className="btn btn-warning" to="/category/women's clothing">Women's Clothing</Link>
        </div>
        <div className='col-4 bg-warning bg-opacity-50 text-end'>
            <Link className="btn btn-info" to="/register">Register</Link>
            {
                          store.loginStatus ? (<button onClick={logoutFn} className="btn btn-danger">Log Out</button>)
                           :
                          (<Link to='/login/' className="btn btn-primary">Login</Link>)
                        }
        </div>
    </div>
  )
}

export default Menu
