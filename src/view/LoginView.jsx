import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
export default function LoginView() {
    const [isLogin, setIsLogion] = useState(false)
    useEffect(() => {
        if (window.location.href.includes('login')) setIsLogion(true)
    })
    return (
        <div width="100%" className="login">
            <div className="formBox">
                <form className='from'>
                    <h5 className='title'>where in the world?</h5>
                    <img src={logo} alt="" className='logo' />
                    <h5 className='title'>{isLogin ? "LOGIN" : "CREATE ACCOUNT"}</h5>
                    {
                        !isLogin && <div className='formItem'>
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
                        isLogin ? <div className='remember'>
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
                    <button className='btn' type='submit'>LOGIN</button>
                </form>
            </div>
        </div>
    );
}