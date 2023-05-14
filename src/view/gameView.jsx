import React from "react";
import {getCountry, getFactsFromApiCall} from "../countrySource.js";
import {currentDifficulty, targetCountryState} from "../model/atoms.js";

function GameView(prop) {
    console.log(prop)
    return (
        <div id={"gameTags"}>
            {prop.gameRound === 1 ? (<div>
                <h1>Welcome to the game</h1>
            </div>) : (<div>
                <h1>Keep it going!</h1>
            </div>)}
            <h3>Round {prop.gameRound}</h3>
            <div id={"GameLocation"}>
                <div id={"ClueLocation"}>
                    {prop.factList.map((fact, index) => {
                        return handleFact(fact, index)
                    })}
                    {Array(5 - prop.guessNumber).fill("Guess to unlock").map((msg, index) => {
                        return <div className="lockedFact" key={index}>{msg}</div>
                    })}
                </div>
            </div>
            <span>{prop.gameState}</span>
            <br/>
            <div className={"inputField"}>
                <input onChange={saveGuess} value={prop.userGuess}/>
                <button onClick={makeGuess}>Guess</button>
            </div>
        </div>
    );

    function saveGuess(event) {
        prop.registerGuess(event.target.value)
    }

    function makeGuess() {
        prop.guess()
    }

    function handleFact(fact, index) {
        if (fact.includes(prop.targetCountry) || fact.includes(prop.targetCountry)) return fact.replaceAll(prop.targetCountry, "This country")
        if (!isNaN(fact[0] * 1)) {
            const factNumber = fact.slice(0, 2)
            const factText = fact.slice(2, fact.length)
            return (<div className="unlockedFact" key={index}>
                <div className={"factNumber"}>{factNumber}</div>
                <div className={"factText"}><span>{factText}</span></div>
            </div>)
        }
        return (<div className="unlockedFact" key={index}><span/><span className={"factText"}>{fact}</span></div>)
    }
}

export default GameView;