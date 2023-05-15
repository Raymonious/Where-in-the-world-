import React from 'react'
import {fireBaseAuth, playerLongestStreak} from "../model/persistant_atoms.js";
import SettingView from '../view/SettingView';
import { useRecoilState } from 'recoil';
import {isGrantedAccess, playerLatestStreak} from '../model/atoms';
import { Navigate } from 'react-router-dom';
import SuspenseView from '../view/suspenseView';

export default function Login(){
    const [access] = useRecoilState(isGrantedAccess);
    const [userLatestStreak] = useRecoilState(playerLatestStreak)
    const [userHighStreak] = useRecoilState(playerLongestStreak)

    if(!access) {
        if(access === null) return <SuspenseView/>
        return <Navigate to="/login" replace/>
    }
    else{
        return (
            <SettingView
                highestStreak = {userHighStreak}
                recentStreak = {userLatestStreak}
                displayName = {fireBaseAuth.currentUser.displayName}
            />
        );
    }
}