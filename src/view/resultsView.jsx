import React from 'react';

export default function ResultsView(pikachu){
    return (
        <div>
            <div>
            <h1 style={{fontFamily:'satisfy'}}>The country was {pikachu.curCountry}</h1>
            <img className="resultsPic" src={pikachu.list.image}></img>
            </div>
            <button onClick = {nextCountryACB}>Proceed to Next Round</button>
            <button onClick = {AddFavACB}>Add to Favorite</button>
            <a href="#/home">Back to HomePage</a>
        </div>
    );


    function nextCountryACB(){
        pikachu.onNextCountry()
    }

    function AddFavACB(){
        pikachu.onAddFav(pikachu.curCountry)
    }

}