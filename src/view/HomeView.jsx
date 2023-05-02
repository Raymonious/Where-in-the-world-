import React from 'react';
import bakcground from '../assets/Home.gif'


export default function HomeView(aa){
    return (
    <div width = "100%" className="home">
        <div className="globe">
        <img src={bakcground}/>
        </div>
        <div onClick={goToQuizACB} className = "start">Click to start</div>
    </div>
    );

    function goToQuizACB(){
        window.location.hash = "#/game"
    }
}