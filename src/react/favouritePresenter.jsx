import FavouriteView from "../view/FavouriteView";
import React from 'react'
import * as Recoil from 'recoil';
import {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak} from "../model/persistant_atoms.js";
import {targetCountryState, countryFacts,currentFavCountry, favDetail, detailAPI, countryDetail, singleDetail} from "../model/atoms.js";
import { DET_URL } from "../apiConfig";
import { useSetRecoilState } from "recoil";

export default function Favourite(aa) {

    const [favc, setfavc] = Recoil.useRecoilState(favoriteCountries);
    const [target, setTarget] = Recoil.useRecoilState(targetCountryState);
    const [facts, setFacts] = Recoil.useRecoilState(countryFacts);
    const [cfc, setCfc] = Recoil.useRecoilState(currentFavCountry);
    const [detail] = Recoil.useRecoilState(favDetail);
    const setCurFav = useSetRecoilState(currentFavCountry);
    const [cDetail, setcDetail] = Recoil.useRecoilState(countryDetail);
    const [sDetail, setsDetail] = Recoil.useRecoilState(singleDetail('Sweden'));

    return (
        <div>
                <FavouriteView
                    favC={favc}
                    selectCountry={countrySelectACB}
                    factList = {detail}
                    test = {cfc}
                    listofDet = {cDetail}
                />
                  {console.log(cDetail)}
        </div>
    );

    function prevDetailACB(country){
        return fetch(DET_URL + country + "&topk=1", detailAPI)
        .then(function(response){return response.json()} ).then(response => console.log(response));
    } 

    function countrySelectACB(country) {
        setCurFav(country);
    
        console.log(cfc);
        console.log(country);
    }
    

}