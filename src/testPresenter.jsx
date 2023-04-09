import * as Recoil from "recoil";
import {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak} from "./model/persistant_atoms.js";
import {currentDifficulty, targetCountryState, countryFacts, playerLatestStreak, playerLatestHighScore} from "./model/atoms.js";
import TestView from "./testView.jsx"
import React from "react";

export default function Sidebar(){
    // persistant atoms
    const [streak, setplayerLongestStreak] = Recoil.useRecoilState(playerLongestStreak)
    const [PHS, setPHS] = Recoil.useRecoilState(playerHighScore)
    const [favc, setfavc] = Recoil.useRecoilState(favoriteCountries)
    const [GHS, setGHS] = Recoil.useRecoilState(globalHighScore)
    const [GLS, setGLS] = Recoil.useRecoilState(globalLongestStreak)
    // not persistant atoms
    const [diff, setDiff] = Recoil.useRecoilState(currentDifficulty)
    const [target, setTarget] = Recoil.useRecoilState(targetCountryState)
    const [facts, setFacts] = Recoil.useRecoilState(countryFacts)
    const [PLS, setPLS] = Recoil.useRecoilState(playerLatestStreak)
    const [plh, setplh] = Recoil.useRecoilState(playerLatestHighScore)

    return (
        <TestView
            streak = {streak}
            playerHighScore = {PHS}
            favList = {favc}
            gHighScore = {GHS}
            gLongestStreak = {GLS}

            difficoulty = {diff}
            targetCountry = {target}
            factList = {facts}
            latestStreak = {PLS}
            latestScore = {plh}

            increaseStreak = {updatePRstreak}
        />
    );

    function updatePRstreak(Streak){
        setplayerLongestStreak(Streak)
    };
    function updatePRscore(score){
        setPHS(score)
    };
    function updatefavList(countries){
        setfavc(countries)
    };

    function updateGHSlist(){
        setGHS([100, 50])
    }

    function updateGLSlist() {
        setGLS([10,5])
    }


    function changediff(){
        setDiff("hard")
    }

    function changeTarget(){
        setTarget("USA")
    }

    function changeFacts(){
        // api call here when real code
        setFacts(["testdata", "this is mock data", "lorem", "ipsum"])
    }

    function setlatestStreak(){
        setPLS(10)
    }

    function setLatestScore(){
        setplh(150)
    }
}
