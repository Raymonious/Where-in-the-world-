import React, { useState } from "react";
import {motion} from "framer-motion";

function FavouriteView(aa) {
    const [num, setNum] = useState(0);
    let img = ["https://lh3.googleusercontent.com/78Irkx8M-SAffrhgKPSc_-vf78XjkvEGiC5L_g2eT7x1utKoQC-JsKwSeK2RtGiZ4qLd-HkqTQHFzV6BE4Mpk5ZU2q3ND3I0FlGZ7A"];
    return(
        <div>
        <div className = "display">
            <motion.img 
            key={num} initial = {{opacity: 0.4}} animate = {{opacity: 1}}  
            transition={{duration: 1.2}} onClick={function() {clickLocACB(aa.favC[num])}} src = {img/*aa.favC[num].image*/}/>
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
        if(aa.favC.length > 5)
        setNum((num + 1) % 5);
        else
        setNum((num + 1) % aa.favC.length);
    }
    function goLeftACB(){
        if(aa.favC.length > 5)
        setNum((num - 1) % 5);
        else
        setNum((num - 1) % aa.favC.length);
    }
    function showACB(c){
        if(document.getElementById(c).style.display === "none"){
            document.getElementById(c + '1').style.backgroundColor = "rgba(255,255,255, 0.1)";
            document.getElementById(c).style.display = "inline-block";
            document.getElementById(c + '2').classList.remove("large")
        }
        else{
            document.getElementById(c).style.display = "none"     
            document.getElementById(c + '1').style.backgroundColor = "transparent";
            document.getElementById(c + '2').classList.add("large")
        }

    }


    function likedLocCB(country){
        
        function clickLocACB(){
            aa.selectCountry(country);
        }
       
        return(
            
        <span key={country} id = {country + '1'} className = "fav" onClick={function() {showACB(country)}}> 
            <img className = "log" src = 'https://www.hangtimemedia.com/wp-content/uploads/2018/06/location-icon-png-3.png'></img>
            <button onClick = {clickLocACB}> click to update </button>
            <img id={country + '2'} className = "img large" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnz1YfNEZ_NxGWI5Xy3jmOdjbUQ2IPDYg52Q&usqp=CAU'/>
            <div className= "text">{country}</div>
            <span className = "none" id={country}>
                <div className = "none1">
                    {aa.factList.summary[0]}
                </div>
            <a className= "more" onClick={clickLocACB} href="">See more</a>
            </span>
            <div>{/*(aa.listofDet(country))*/}</div>
        </span>
        ); 
   

    }




}
export default FavouriteView