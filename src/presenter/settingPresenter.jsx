import React from 'react'
import SettingView from '../view/SettingView';
import { useRecoilState } from 'recoil';
import { isGrantedAccess } from '../model/atoms';
import { Navigate } from 'react-router-dom';
export default function Login(){
    const[access] = useRecoilState(isGrantedAccess);
    if(!access) return <Navigate to="/login" replace/>
    else{
        return (
            <SettingView/>
        );
    }
}