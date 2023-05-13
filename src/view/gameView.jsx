import React from "react";
import {getCountry, getFactsFromApiCall} from "../countrySource.js";
import {currentDifficulty, targetCountryState} from "../model/atoms.js";

function GameView(prop) {
    console.log(prop)
    return (
        <div>
            {prop.gameRound === 1 ? (<div>
                <h1 style={{position: "relative", left: "32%"}}>Welcome to the game</h1>
            </div>) : (<div>
                <h1 style={{position: "relative", left: "32%"}}>Keep it going!</h1>
            </div>)}
            <span style={{position: "relative", left: "30%"}}>Round {prop.gameRound}</span>
            <div id={"GameLocation"}>
                <div id={"ClueLocation"}>
                    {prop.factList.map((fact, index) => {
                        return <div className="factList" key={index}>{handleFact(fact)}</div>
                    })}
                    {Array(5 - prop.guessNumber).fill("Guess to unlock").map((msg, index) => {
                        return <div className="factList" key={index}>{msg}</div>
                    })}
                </div>
            </div>
            <span style={{position: "relative", left: "30%"}}>{prop.gameState}</span>
            <br/>
            <input style={{position: "relative", left: "30%"}} onChange={saveGuess} value={prop.userGuess}/>
            <button style={{position: "relative", left: "30%"}} onClick={makeGuess}>Guess</button>
        </div>
    );

    function saveGuess(event) {
        prop.registerGuess(event.target.value)
    }

    function makeGuess() {
        prop.guess()
    }

    function handleFact(fact) {
        if (fact.includes(prop.targetCountry) || fact.includes(prop.targetCountry)) return fact.replaceAll(prop.targetCountry, "This country")
        return fact
    }
}

export default GameView;