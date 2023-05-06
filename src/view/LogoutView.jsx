import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
export default function LogoutView(props) {
   function handleClick(){
        props.onLogout();
        window.location.hash = "#/home";
   }
   
    return (
        <div width="100%" className="login">
            <div className="formBox">
                    <h5 className='title'>where in the world?</h5>
                    <img src={logo} alt="" className='logo' />
                    <div className='formItem'>
                        <label>Email</label>
                        <input type="email" className="ipt" name='email' />
                    </div>
                    <button className='btn' onClick={handleClick}>LoGouT</button>
            </div>
        </div>
    );
}