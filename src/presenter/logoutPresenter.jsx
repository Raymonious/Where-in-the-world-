import React from 'react'
import LogoutView from '../view/LogoutView';
import { signOut } from 'firebase/auth';
import { fireBaseAuth } from '../model/persistant_atoms';

export default function Logout(){
    function handleLogOut(){
        signOut(fireBaseAuth);
    }   
    return (
        <LogoutView onLogout = {handleLogOut}/>
    );
}