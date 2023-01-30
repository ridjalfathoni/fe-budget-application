import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLoginAPI } from '../Redux/Auth'
import './login.css'

function Login(props) {
    const [loginState, setLoginState] = useState({});
    const dispatch = useDispatch();
    const { loading  } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    if (loading) return <p>Loading...</p>
    
    function submitForm (e) {
        try {
            e.preventDefault()
            dispatch(authLoginAPI(loginState));
            navigate('/')
        } catch (error) {
            
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={submitForm}>
                <div className="form-input">
                    <label htmlFor="Username">Username</label>
                    <input type="text" placeholder='Username'onChange={(e) => {
                        const username = e.target.value;
                        setLoginState({...loginState, ...{username}});
                    }}/>
                </div>
                <div className="form-input">
                    <label htmlFor="Passowrd">Password</label>
                    <input type="password" placeholder='Username'onChange={(e) => {
                        const password = e.target.value;
                        setLoginState({...loginState, ...{password}});
                    }}/>
                </div>
                <button>Login</button>
                <a>Don’t have an account? Sign Up</a>
            </form>
        </div>
        // <div className="login">
        //     <div className="loginContainer">
        //         <h1>Login</h1>
        //         <form onSubmit={(e) => {
        //             e.preventDefault();
        //             dispatch(authLoginAPI(loginState))
        //         }}>
        //             <div className="formInput">
        //                 <label>Email or Username</label>
        //                 <input type="text" placeholder="Username" onChange={(e) => {
        //                     const username = e.target.value;
        //                     setLoginState({ ...loginState, ...{username}});
        //                 }} />
        //             </div>
        //             <div className="formInput">
        //                 <label>Password</label>
        //                 <input type="password" placeholder="Password" onChange={(e) => {
        //                     const password = e.target.value;
        //                     setLoginState({ ...loginState, ...{password}});
        //                 }} />
        //             </div>
        //             <button>Login</button>
        //         </form>
        //     </div>
        // </div>
    );
}

export default Login;