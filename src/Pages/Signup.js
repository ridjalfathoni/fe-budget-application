import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerNewUser } from '../Redux/Auth'
import './login.css'

function SignUp(props) {
    const [signupState, setSignupState] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function submitForm (e) {
        try {
            e.preventDefault()
            dispatch(registerNewUser(signupState));
            navigate('/login')
        } catch (error) {
            
        }
    }
    return (
        <div className="login-container">
            <h1>Sign Up</h1>
            <form onSubmit={submitForm}>
                <div className="form-input">
                    <label htmlFor="Username">Username</label>
                    <input type="text" placeholder='Username' onChange={(e) => {
                        const username = e.target.value;
                        setSignupState({...signupState, ...{username}});
                    }}/>
                </div>
                <div className="form-input">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Name' onChange={(e) => {
                        const name = e.target.value;
                        setSignupState({...signupState, ...{name}});
                    }}/>
                </div>
                <div className="form-input">
                    <label htmlFor="Passowrd">Password</label>
                    <input type="password" placeholder='Username' onChange={(e) => {
                        const password = e.target.value;
                        setSignupState({...signupState, ...{password}});
                    }}/>
                </div>
                <button>Sign Up</button>
                <Link to="/Login">Login</Link>
            </form>
        </div>
    );
}

export default SignUp;