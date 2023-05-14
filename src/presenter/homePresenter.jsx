import React from 'react'
import HomeView from '../view/HomeView';
import * as Recoil from "recoil";
import {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak} from "../model/persistant_atoms.js";
import {currentDifficulty, targetCountryState, countryFacts, playerLatestStreak, playerLatestHighScore, isGrantedAccess} from "../model/atoms.js";
import { useRecoilState } from 'recoil';

export default function Home(aa){
    const [access] = useRecoilState(isGrantedAccess);
    
    return (
        <HomeView access = {access}/>
    );
}