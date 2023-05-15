import React from 'react'
import {fireBaseAuth, playerLongestStreak} from "../model/persistant_atoms.js";
import ProfileView from '../view/profileView.jsx';
import {useRecoilState} from 'recoil';
import {
    isGrantedAccess,
    playerLatestStreak,
    singleDetail
} from '../model/atoms';
import { Navigate } from 'react-router-dom';
import SuspenseView from '../view/suspenseView';

export default function Profile(){
    const [access] = useRecoilState(isGrantedAccess);
    const [userLatestStreak] = useRecoilState(playerLatestStreak)
    const [detail] = useRecoilState(singleDetail);
    const [userHighStreak] = useRecoilState(playerLongestStreak)



    if(!access) {
        if(access === null) return <SuspenseView/>
        return <Navigate to="/login" replace/>
    }
    else{

        return (
            <ProfileView
                highestStreak = {userHighStreak}
                recentStreak = {userLatestStreak}
                displayName = {fireBaseAuth.currentUser.displayName}
            />
        );
    }
}