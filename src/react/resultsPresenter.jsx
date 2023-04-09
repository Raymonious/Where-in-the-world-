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
    const [num, setNum] = useState(1);
    const [detail] = Recoil.useRecoilState(curDetail);
    const setFav = useSetRecoilState(favoriteCountries);

   


    return (
        <ResultsView curCountry = {curCountry} onNextCountry = {CountryModifierACB} list = {detail}
        onAddFav = {FavAdderACB}/>
    );

    function CountryModifierACB(){
        setDiff(difficulty[num % 3]);
        setNum(num + 1);
    }

    function FavAdderACB(country){
        setFav((currentState) => [
            ...currentState,
            country,
          ]);
    }
}

