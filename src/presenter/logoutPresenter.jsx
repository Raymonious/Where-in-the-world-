import React from 'react'
import LogoutView from '../view/LogoutView';
import { signOut } from 'firebase/auth';
import { fireBaseAuth } from '../model/persistant_atoms';
import { useRecoilState } from 'recoil';
import { isGrantedAccess } from '../model/atoms';
import { Navigate } from 'react-router-dom';

export default function Logout(){
    const [access] = useRecoilState(isGrantedAccess)
    if(!access) return <Navigate to="/login" replace/>
    else{
        function handleLogOut(){
            signOut(fireBaseAuth);
         }   
        return (
            <LogoutView onLogout = {handleLogOut}/>
        );
    }
}