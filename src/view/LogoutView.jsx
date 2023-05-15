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
                    <button className='btn' onClick={handleClick}>Log out</button>
            </div>
        </div>
    );
}