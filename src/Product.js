import React, {useState, useEffect, useContext} from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {

    const {id} = useParams();
    console.log(id);

    const tempLoginData = useSelector(state => state.user.loginData);
    console.log('tempLoginData', tempLoginData);

    const [product, setProduct] = useState({});

    const [cartStatus, setCartStatus] = useState(false);

    // useEffect(() => {
    //     console.log('inside useefect for updating cart status', product.id, localStore.store.cartTemp);
    //     localStore.store.cartTemp.map((item) => {
    //         if(item.id === product.id) {
    //             setCartStatus(true);
    //         }
    //         else {
    //             setCartStatus(false);
    //         }
    //     })
    //     if(localStore.store.cartTemp.length === 0) {
    //         setCartStatus(false);
    //     }
    // })

    useEffect(() => {
        console.log('cartstatus for this product', cartStatus);
    })

    const fetchProduct = async() => {
        const response = await axios.get(`http://localhost:4000/products/searchbyid/${id}`, {
            headers: {
                "x-access-token": tempLoginData.token
            }
        })
        // const data = await response.json();
        console.log(response.data);
        setProduct(response.data);
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    // useEffect(() => {
    //     fetchProduct();
    // }, [id])
    // if switching to other product is possible from product page

    const addToWishlist = (id) => {
        console.log('Product to be added in wishlist - ', id);
        //call api for wishlist
    }

    // const addToCart = (obj) => {
    //     console.log('Product to be added in cart - ', obj);
    //     //store in context
    //     localStore.setStore({
    //         ...localStore.store,
    //         cartTemp: [...localStore.store.cartTemp, obj]
    //     })
    // }

    // const removeFromCart = (obj) => {
    //     console.log('Product to be added in cart - ', obj);
    //     let tempArr = localStore.store.cartTemp.filter((item) => {
    //         return item.id !== obj.id
    //     })
    //     localStore.setStore({
    //         ...localStore.store,
    //         cartTemp: [...tempArr]
    //     })
    // }


    return (
        (tempLoginData.loginStatus && 
        <div className='row'>
            <div className='col-12'>
                <div className='row my-4'>
                    <div className='col-4'>
                        <img src={product.image} className="img-responsive img-fluid"/>
                    </div>
                    <div className='col-4'>
                        <h2>{product.title}</h2>
                        <div>{product.description}</div>
                        <h3>INR {product.price}</h3>
                        <div>{product.rating && product.rating.count} have purchased this item.</div>
                        <h4>Average Rating - {product.rating && product.rating.rate}</h4>
                    </div>
                    {/* <div className='col-4'>
                        {cartStatus ? (<button className='btn btn-danger' onClick={() => removeFromCart(product)}>Remove From Cart</button>)
                        :
                        (<button className='btn btn-primary' onClick={() => addToCart(product)}>Add to Cart</button>)}

                        {cartStatus && (<Link to="/cart" className='btn btn-warning'>Move To Cart</Link>)}

                        show remove cart button
                        create cart page
                        <br></br>
                        <button className='btn btn-info' onClick={() => addToWishlist(product.id)}>Add to Wishlist</button>
                    </div> */}
                </div>
            </div>
        </div>
        )
    )
}

export default Product
