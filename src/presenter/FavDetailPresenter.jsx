import FavDetailView from '../view/FavDetailView.jsx';
import React from 'react'
import * as Recoil from 'recoil';
import {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak} from "../model/persistant_atoms.js";
import {targetCountryState, countryFacts,currentFavCountry, favDetail, favDetail2,favoriteCImage} from "../model/atoms.js";
import { DET_URL } from "../apiConfig";


export default function FavDetail(aa) {

    const [cfc, setCfc] = Recoil.useRecoilState(currentFavCountry);
    const [detail] = Recoil.useRecoilState(favDetail);
    const [data] = Recoil.useRecoilState(favDetail2);
    const [cImage] = Recoil.useRecoilState(favoriteCImage);

    return (
        <div>
                <FavDetailView
                    factList = {detail}
                    currentC = {cfc}
                    factData = {data}
                    countrysImage = {cImage}
                />
        </div>
    );
}