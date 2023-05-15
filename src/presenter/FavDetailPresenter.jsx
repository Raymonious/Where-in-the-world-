import FavDetailView from '../view/FavDetailView.jsx';
import React from 'react'
import * as Recoil from 'recoil';
import {targetCountryState, countryFacts,currentFavCountry, favDetail, favDetail2,favoriteCImage, isGrantedAccess} from "../model/atoms.js";
import { DET_URL } from "../apiConfig";
import { Navigate } from 'react-router-dom';
import SuspenseView from '../view/suspenseView.jsx';


export default function FavDetail(aa) {
    const [access] = Recoil.useRecoilState(isGrantedAccess);
    const [cfc, setCfc] = Recoil.useRecoilState(currentFavCountry);
    const [detail] = Recoil.useRecoilState(favDetail);
    const [data] = Recoil.useRecoilState(favDetail2);
    const [cImage] = Recoil.useRecoilState(favoriteCImage);
    if (!access) {
        if(access === null) return <SuspenseView></SuspenseView>
        return <Navigate to="/login" replace/>
    }
    else{

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

}