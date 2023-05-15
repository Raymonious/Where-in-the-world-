import React from 'react'
import SettingView from '../view/SettingView';
import { useRecoilState } from 'recoil';
import {isGrantedAccess, playerLatestStreak} from '../model/atoms';
import { Navigate } from 'react-router-dom';
import SuspenseView from '../view/suspenseView';
import {playerHighScore} from "../model/persistant_atoms.js";
export default function Login(){
    const [access] = useRecoilState(isGrantedAccess);
    const [userLatestStreak] = useRecoilState(playerLatestStreak)
    const [userHighStreak] = useRecoilState(playerHighScore)
    if(!access) {
        if(access === null) return <SuspenseView/>
        return <Navigate to="/login" replace/>
    }
    else{

        return (
            <SettingView
                highestStreak = {userHighStreak}
                recentStreak = {userLatestStreak}
            />
        );
    }
}