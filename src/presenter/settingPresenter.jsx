import React from 'react'
import SettingView from '../view/SettingView';
import { useRecoilState } from 'recoil';
import { isGrantedAccess } from '../model/atoms';
import { Navigate } from 'react-router-dom';
import SuspenseView from '../view/suspenseView';
export default function Login(){
    const[access] = useRecoilState(isGrantedAccess);
    if(!access) {
        if(access === null) return <SuspenseView/>
        return <Navigate to="/login" replace/>
    }
    else{
        return (
            <SettingView/>
        );
    }
}