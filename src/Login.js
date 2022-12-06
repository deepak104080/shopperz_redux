// import React, { useState, useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { GlobalContext } from './App';
// import axios from 'axios';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const localContext = useContext(GlobalContext);
//     const {store, setStore} = localContext;

//     const usernameFn = (event) => {
//         console.log(event.target.value);
//         setUsername(event.target.value);
//     }

//     const passwordFn = (event) => {
//         console.log(event.target.value);
//         setPassword(event.target.value);
//     }

//     const loginFn = async () => {
//         //make and api call to check login - username and password
//         const tempObj = {
//             email: username,
//             password: password
//         }
//         const response = await axios.post('http://localhost:4000/users/login', tempObj)
//         // response - true/false
//         //if true
//         if(response.status === 200) {
//             //update variable in context
//             setStore({
//                 ...store,
//                 loginStatus: true,
//                 userName: username
//             })
//             //navigate dashboard
//             //if store - lastpage is not blank  -----> navigate to store - lastpage
//             console.log('store.lastPage', store.lastPage);
//             if(store.lastPage !== '') {
//                 console.log('store.lastPage inside', store.lastPage);
//                 navigate('/'+store.lastPage);
//             }
//             else {
//                 navigate('/home', {state : {username: username}});
//             }
//         }
//         else {
//             //show error
//             alert('Error');
//         }
//     }
//     return (
//         <div className="row bg-warning bg-opacity-50">
//             <div className="col-12">
//                     Userid - <input type="text" id="name" onBlur={usernameFn}/>
//                     <br></br>
//                     Password - <input type="password" id="country" onBlur={passwordFn}/>
//                     <br></br>
//                     <button onClick={loginFn}>Login</button>
//                     <br></br><br></br>
//             </div>
//         </div>
//     )
// }

// export default Login


// // Authorization
// // Authentication