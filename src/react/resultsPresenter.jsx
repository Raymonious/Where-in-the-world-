import React, { useState } from 'react'
import ResultsView from '../view/resultsView.jsx';
import * as Recoil from "recoil";
import { useSetRecoilState } from 'recoil';
import {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak} from "../model/persistant_atoms.js";
import {currentDifficulty, targetCountryState, countryFacts, playerLatestStreak, playerLatestHighScore, curDetail} from "../model/atoms.js";
import { getCountry } from '../countrySource.js';

export default function Results(pikachu){
    const [curCountry, setCountry] = Recoil.useRecoilState(targetCountryState);
    const [curDiff, setDiff] = Recoil.useRecoilState(currentDifficulty);
    const difficulty = ['easy', 'medium', 'hard'];
    const [num, setNum] = useState(0);
    const [detail] = Recoil.useRecoilState(curDetail);
    const setFav = useSetRecoilState(favoriteCountries);

   


    return (
        <ResultsView curCountry = {curCountry} onNextCountry = {CountryModifierACB} list = {detail}
        onAddFav = {FavAdderACB} favList/>
    );

    /*rough iterator between easy, medium and hard levels and set atom currentDifficulty to switch to next country for the next round*/ 
    function CountryModifierACB(){
        setDiff(difficulty[Math.floor(100 * Math.random()) % 3]);
        window.location.hash = "#/game"
    }

    /*useSetRecoilState to set the targetCountryState atom with a new array including both the old ones and the newly added one*/ 
    function FavAdderACB(country){
        setFav((currentState) => [
            ...currentState,
            country,
          ]);
    }
}

