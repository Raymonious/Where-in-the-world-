import React from 'react'
import LogoutView from '../view/LogoutView';
import { isGrantedAccess } from '../model/atoms';
import { useRecoilState } from 'recoil';
export default function Logout(){
    const [, changeAccess] = useRecoilState(isGrantedAccess);
    function handleLogOut(){
        changeAccess(false);
    }   
    return (
        <LogoutView onLogout = {handleLogOut}/>
    );
}