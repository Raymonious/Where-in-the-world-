import React from 'react'
import LoginView from '../view/LoginView';
import { isGrantedAccess } from '../model/atoms';
import * as Recoil from "recoil";
import {useRecoilState} from 'recoil';
import { useEffect, useState } from 'react';


export default function Login(){
    
    const [, changeAccess] = useRecoilState(isGrantedAccess);//navbar access rights or login state in general
    const [isLogin, setIsLogion] = useState(true) //component state for rendering login or create. This is not login state !
    const [email, changeEmail] = useState(); 
    const [password, changePass] = useState();

    function accessHandlerACB(){
        changeAccess(true);
    }
    
    function SceneHandlerACB(){
        setIsLogion(false);
    }

    function handleEmailChange(value){
        changeEmail(value);
    }

    function handlePassChange(value){
        changePass(value);
    }

    return (
        <LoginView onCreateAccount = {accessHandlerACB} isLogin = {isLogin}
        onSceneChange = {SceneHandlerACB} email = {email} onEmailChange = {handleEmailChange} password = {password}
        onPassChange = {handlePassChange}/>
    );
}   
