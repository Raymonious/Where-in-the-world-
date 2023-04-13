import React from 'react';

export default function HomeView(aa){
    return (
    <div onClick={goToQuizACB} className="home">
        <div className="globe">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rotating_earth_animated_transparent.gif/220px-Rotating_earth_animated_transparent.gif'/>
        </div>
        <div>Click to start</div>
    </div>
    );

    function goToQuizACB(){
        window.location.hash = "#/game"
    }
}