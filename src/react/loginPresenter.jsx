import React from 'react'
import LoginView from '../view/LoginView';
import { isGrantedAccess } from '../model/atoms';
import * as Recoil from "recoil";
import {useRecoilState, useSetRecoilState} from 'recoil';
import { useEffect, useState } from 'react';
import { isLoginA } from '../model/atoms';


export default function Login(){
    const [, changeAccess] = useRecoilState(isGrantedAccess);
    function accessHandlerACB(){
        changeAccess(true);
    }
    const [isLogin, setIsLogion] = useRecoilState(isLoginA)
    function SceneHandlerACB(){
        setIsLogion(false);
    }

    return (
        <LoginView onCreateAccount = {accessHandlerACB} isLogin = {isLogin}
        onSceneChange = {SceneHandlerACB}/>
    );
}   