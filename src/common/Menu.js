import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { setLogout } from '../redux/actions/userActions';
// import { GlobalContext } from '../App';

const Menu = () => {
  // const localContext = useContext(GlobalContext);
  // const {store, setStore} = localContext;
  const tempLoginData = useSelector(state => state.user.loginData);
  console.log('tempLoginData', tempLoginData);
  const dispatch = useDispatch();


    const logoutFn = () => {
        // setStore({
        //   ...store,
        //   loginStatus: false,
        //   userName: ''
        // })
        dispatch(setLogout());

    }


  return (
    <div className='row'>
        <div className='col-6 bg-warning bg-opacity-50'>
            <Link className="btn btn-info" to="/home">Home</Link>
            <Link className="btn btn-warning" to="/category/jewellery">Jewellery</Link>
            <Link className="btn btn-primary" to="/category/men's clothing">Mens' Clothing</Link>
            <Link className="btn btn-info" to="/category/electronics">Electronics</Link>
            <Link className="btn btn-warning" to="/category/women's clothing">Women's Clothing</Link>
        </div>
        <div className='col-2 bg-warning bg-opacity-50'>
            <div>{tempLoginData.userName} - {tempLoginData.name}</div>
        </div>
        <div className='col-4 bg-warning bg-opacity-50 text-end'>
            <Link className="btn btn-info" to="/register">Register</Link>
            {
                          tempLoginData.loginStatus ? (<button onClick={logoutFn} className="btn btn-danger">Log Out</button>)
                           :
                          (<Link to='/login/' className="btn btn-primary">Login</Link>)
                        }
        </div>
    </div>
  )
}

export default Menu
