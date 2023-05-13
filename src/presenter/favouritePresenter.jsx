import FavouriteView from "../view/FavouriteView";
import React, { useEffect } from 'react'
import * as Recoil from 'recoil';
import {playerLongestStreak, playerHighScore, globalHighScore, globalLongestStreak} from "../model/persistant_atoms.js";
import {targetCountryState, countryFacts,currentFavCountry, favDetail, detailAPI, singleDetail, currentSeleFav, countryDetail2, isGrantedAccess } from "../model/atoms.js";
import { DET_URL } from "../apiConfig";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import FavPopupView from "../view/favPopupView";
import { Navigate, useNavigate } from "react-router-dom";

export default function Favourite(aa) {
    const [access] = Recoil.useRecoilState(isGrantedAccess);
    if (!access){return <Navigate to="/login" replace/>}
    else{
    const [favc, setfavc] = (access)? Recoil.useRecoilState(favoriteCountries):[null, null];
    const [cfc, setCfc] = Recoil.useRecoilState(currentFavCountry);
    const [detail] = Recoil.useRecoilState(singleDetail);
    const setCurFav = useSetRecoilState(currentFavCountry);
    const [curS, setcurS] = Recoil.useRecoilState(currentSeleFav);
    const [cD, setcD] = Recoil.useRecoilState(countryDetail2);
    const [num, setNum] = useState(0);

    return (
        (favc.length)?
        <div>
                <FavouriteView
                    favC={favc}
                    selectCountry={countrySelectACB}
                    factList = {detail}
                    listofDet = {cD}
                    removeFromList = {countryRemoveACB}
                    setSelect = {SelectFavACB}
                    num = {num}
                    onNumSet = {handleNumSet}/>
        </div>:<FavPopupView/>
    );

    function handleNumSet(num){
        setNum(num);
    }

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
}