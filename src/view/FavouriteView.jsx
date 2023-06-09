import React, { Suspense, useState } from "react";
import {motion} from "framer-motion";

function FavouriteView(aa) {
    
    let img = ["https://lh3.googleusercontent.com/78Irkx8M-SAffrhgKPSc_-vf78XjkvEGiC5L_g2eT7x1utKoQC-JsKwSeK2RtGiZ4qLd-HkqTQHFzV6BE4Mpk5ZU2q3ND3I0FlGZ7A"];
    return(
        <div>
        <div className = "display">
            
            <a onClick={function() {aa.selectCountry(aa.favC[aa.num])}} href="#/details">
            <motion.img 
            key={aa.num} initial = {{opacity: 0.4}} animate = {{opacity: 1}}  
            transition={{duration: 1.2}} src = {aa.listofDet[aa.num].original}/>
        </a>

            <div className = "heading">
                SAVED LOCATIONS
            </div>
            <div className = "left" onClick={goLeftACB}>
                <img src='https://images.freeimages.com/fic/images/icons/1579/devine/256/arrow.png'/></div>
            <div className = "right" onClick={goRightACB}>
                <img src='https://images.freeimages.com/fic/images/icons/1579/devine/256/arrow.png'/></div>
        </div>

        <div>
           
            {aa.favC.map(likedLocCB)}
        </div></div>
    );

    function goRightACB(){
        aa.onNumSet((aa.num + 1) % aa.favC.length);
        if(aa.favC.length > 5){
            aa.onNumSet((aa.num + 1) % 5);
        }
        else{
            aa.onNumSet((aa.num + 1) % aa.favC.length);
        }


    }
    function goLeftACB(){
        if(aa.favC.length > 5){
            if(aa.num === 0)
                aa.onNumSet(4)
            else
                aa.onNumSet((aa.num - 1) % 5);
        }
        else{
            if(aa.num === 0)
                aa.onNumSet(aa.favC.length -1)
            else
                aa.onNumSet((aa.num - 1) % aa.favC.length);
        }
        
    }
    function showACB(c){
        aa.setSelect(c);
    }

   
    function likedLocCB(country,index){
       
        function clickLocACB(){
            aa.selectCountry(country);
        }


        return(
        <span key={country} id = {country + '1'} className = "fav" onClick={function() {showACB(country)}}> 
            <img className = "log" src = 'https://www.hangtimemedia.com/wp-content/uploads/2018/06/location-icon-png-3.png'></img>
            <img id={country + '2'} className = "img large" src={aa.listofDet[index].large2x}/>
            <div className= "text">{country}</div>
            
            <span className = "none" id={country}>
                <div className = "none1">
                    {aa.factList}
                </div>
                <span className = "log2" onClick={deleteCountryACB}><img src="https://cdn-icons-png.flaticon.com/512/860/860829.png"/></span>
                <span><a className= "more" href="#/details" onClick={clickLocACB} >See more</a></span>
            
            </span>
        </span>
        ); 
        
        function deleteCountryACB(){
            aa.removeFromList(country);
        }

    }




}
export default FavouriteView