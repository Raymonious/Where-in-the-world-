import FavouriteView from "../view/FavouriteView";
import React from 'react'
import * as Recoil from 'recoil';
import {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak} from "../model/persistant_atoms.js";
import {targetCountryState, countryFacts,currentFavCountry, favDetail, detailAPI, countryDetail, singleDetail, currentSeleFav } from "../model/atoms.js";
import { DET_URL } from "../apiConfig";
import { useSetRecoilState } from "recoil";

export default function Favourite(aa) {

    const [favc, setfavc] = Recoil.useRecoilState(favoriteCountries);
    const [cfc, setCfc] = Recoil.useRecoilState(currentFavCountry);
    const [detail] = Recoil.useRecoilState(singleDetail);
    const setCurFav = useSetRecoilState(currentFavCountry);
    const [cDetail, setcDetail] = Recoil.useRecoilState(countryDetail);
    const [curS, setcurS] = Recoil.useRecoilState(currentSeleFav);


    return (
        <div>
                <FavouriteView
                    favC={favc}
                    selectCountry={countrySelectACB}
                    factList = {detail}
                    listofDet = {cDetail}
                    removeFromList = {countryRemoveACB}
                    setSelect = {SelectFavACB}
                />
        </div>
    );

    function SelectFavACB(country) {
        if (curS !== country && (document.getElementById(curS) !== null)){
            document.getElementById(curS).style.display = "none"     
            document.getElementById(curS + '1').style.backgroundColor = "transparent";
            document.getElementById(curS + '2').classList.add("large")
        }        
        setcurS(country);
        document.getElementById(country + '1').style.backgroundColor = "rgba(255,255,255, 0.1)";
        document.getElementById(country).style.display = "inline-block";
        document.getElementById(country + '2').classList.remove("large")
    }
    function countrySelectACB(country) {
        setCurFav(country);
 
        console.log(country);
    }
    function countryRemoveACB(country) {
        setfavc(favc.filter(x => x !== country))
        
    }

}