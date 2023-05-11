import React from 'react'
import LoginView from '../view/LoginView';
import * as Recoil from "recoil";
import {useRecoilState} from 'recoil';
import { useEffect, useState } from 'react';
import { sessionType } from '../model/atoms';

export default function Login(){
    
    const [isLogin, setIsLogion] = useState(true) //component state for rendering login or create. This is not login state !
    const [email, changeEmail] = useState(); 
    const [password, changePass] = useState();
    const [session, updateType] = useRecoilState(sessionType);

    function SceneHandlerACB(){
        setIsLogion(!isLogin);
    }

    function handleEmailChange(value){
        changeEmail(value);
    }

    function handlePassChange(value){
        changePass(value);
    }

    function handleSessionUpdate(session){
       updateType(session);
    }

    return (
        <LoginView isLogin = {isLogin}
        onSceneChange = {SceneHandlerACB} email = {email} onEmailChange = {handleEmailChange} password = {password}
        onPassChange = {handlePassChange} session = {session} onSessionChange = {handleSessionUpdate}/>
    );

}   
