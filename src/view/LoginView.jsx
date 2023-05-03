import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
export default function LoginView(props) {
    

    function signUpHandlerACB(){
        props.onSceneChange();
        window.location.hash = "#/create"
    }

    function registerHandlerACB(){
        props.onCreateAccount();
    }

    return (
        <div width="100%" className="login">
            <div className="formBox">
                
                    <h5 className='title'>where in the world?</h5>
                    <img src={logo} alt="" className='logo' />
                    <h5 className='title'>{props.isLogin ? "LOGIN" : "CREATE ACCOUNT"}</h5>
                    {
                        !props.isLogin && <div className='formItem'>
                            <label>Name</label>
                            <input type="text" className="ipt" name='name' />
                        </div>
                    }
                    <div className='formItem'>
                        <label>Email</label>
                        <input type="email" className="ipt" name='email' />
                    </div>
                    <div className='formItem'>
                        <label>Password</label>
                        <input type="password" className="ipt" name='password' />
                    </div>
                    {
                        props.isLogin ? <div className='remember'>
                            <p>
                                <input type="checkbox" className="checkout" />
                                Remember Me
                            </p>
                            <a>Forgot Password?</a>
                        </div> : <div className='remember'>
                            <p>
                                <input type="checkbox" className="checkout" />
                                laccept the Terms  Conditions
                            </p>
                            <a></a>
                        </div>
                    }
                    {
                     props.isLogin ?
                    <div>
                    <button className='btn' onClick = {registerHandlerACB}>LOGIN</button>
                    <button className='btn'  onClick = {signUpHandlerACB}>SIGN UP</button>
                    </div>:
                    <div>
                    <button className='btn'  onClick = {registerHandlerACB}>SIGN UP</button>
                    </div>
                    }
                
            </div>
        </div>
    );
}