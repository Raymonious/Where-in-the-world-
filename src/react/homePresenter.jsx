import React from 'react'
import HomeView from '../view/HomeView';
import * as Recoil from "recoil";
import {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak} from "../model/persistant_atoms.js";
import {currentDifficulty, targetCountryState, countryFacts, playerLatestStreak, playerLatestHighScore} from "../model/atoms.js";

export default function Home(aa){
    return (
        <HomeView
        />
    );
}