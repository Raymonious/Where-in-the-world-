import FavouriteView from "../view/FavouriteView";
import React from 'react'
import * as Recoil from 'recoil';
import {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak} from "../model/persistant_atoms.js";
import {targetCountryState, countryFacts,currentFavCountry, favDetail, detailAPI} from "../model/atoms.js";
import { DET_URL } from "../apiConfig";

export default function Favourite(aa) {

    const [favc, setfavc] = Recoil.useRecoilState(favoriteCountries)
    const [target, setTarget] = Recoil.useRecoilState(targetCountryState)
    const [facts, setFacts] = Recoil.useRecoilState(countryFacts)
    const [cfc, setCfc] = Recoil.useRecoilState(currentFavCountry)
    const detail = Recoil.useRecoilState(favDetail)

    return (
        <div>
                <FavouriteView
                    favC={favc}
                    selectCountry={countrySelectACB}
                    factList = {detail}
                    test = {cfc}
                    listofDet = {prevDetailACB}

                />
        </div>
    )

    function prevDetailACB(country){
        return fetch(DET_URL + country + "&topk=1", detailAPI)
        .then(function(response){return response.json()} ).then(response => console.log(response));
    } 

    function countrySelectACB(country) {
        setCfc(country)
    }

}