import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './common/Header';
import Footer from './common/Footer';
import Menu from './common/Menu';

import Home from './Home';
import Category from './Category';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';
import NotFound from './NotFound';
import Register from './Register';
import Login from './Login';

export const GlobalContext = React.createContext();

function App() {

  const initialObj = {
    cartTemp : [],
    loginStatus: false,
    userName: '',
    userDetails: {},
    lastPage: ''
  }

  const [store, setStore] = useState(initialObj);

  useEffect(() => {
    console.log('Context - ', store);
  }, [store])

  return (
    <div className="">
      <BrowserRouter>
        <GlobalContext.Provider value={{store, setStore}}>
        <div className='container'>

          <Header/>
          <Menu/>

          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/category/:name' element={<Category/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/cart/' element={<Cart/>} />
            <Route path='/checkout/' element={<Checkout/>} />
            <Route path='/register/' element={<Register/>} />
            <Route path='/login/' element={<Login/>} />
            {/* <Route path='/product' element={} />
            <Route path='/wishlist' element={} />
            <Route path='/cart' element={} />
            <Route path='/checkout' element={} />
            <Route path='/order' element={} />
            <Route path='/history' element={} />
            <Route path='/login' element={} />
            <Route path='/register' element={} /> */}

            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>






          <Footer/>
            
        </div>
        </GlobalContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
