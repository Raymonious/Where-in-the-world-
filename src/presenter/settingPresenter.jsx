import React from 'react'
import {favoriteCountries, fireBaseAuth, playerLongestStreak} from "../model/persistant_atoms.js";
import SettingView from '../view/SettingView';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {
    countryDetail2,
    currentFavCountry,
    currentSeleFav,
    isGrantedAccess,
    playerLatestStreak,
    singleDetail
} from '../model/atoms';
import { Navigate } from 'react-router-dom';
import SuspenseView from '../view/suspenseView';
import * as Recoil from "recoil";
import {useState} from "react";

export default function Setting(){
    const [access] = useRecoilState(isGrantedAccess);
    const [userLatestStreak] = useRecoilState(playerLatestStreak)
    const setCurFav = useSetRecoilState(currentFavCountry);
    const [curS, setcurS] = Recoil.useRecoilState(currentSeleFav);
    const [num, setNum] = useState(0);
    const [detail] = Recoil.useRecoilState(singleDetail);
    const [favc, setfavc] = Recoil.useRecoilState(favoriteCountries);
    const [cD, setcD] = Recoil.useRecoilState(countryDetail2);
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