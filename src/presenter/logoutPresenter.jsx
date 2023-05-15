import React from 'react'
import LogoutView from '../view/LogoutView';
import { signOut } from 'firebase/auth';
import { fireBaseAuth } from '../model/persistant_atoms';
import { useRecoilState } from 'recoil';
import { isGrantedAccess } from '../model/atoms';
import { Navigate } from 'react-router-dom';
import SuspenseView from '../view/suspenseView';

export default function Logout(){
    const [access] = useRecoilState(isGrantedAccess)
    if(!access) {
        if(access === null) return <SuspenseView/>
        return <Navigate to="/login" replace/>
    }
    else{
        function handleLogOut(){
            signOut(fireBaseAuth);
            window.location.reload()
         }   
        return (
            <LogoutView onLogout = {handleLogOut}/>
        );
    }
}