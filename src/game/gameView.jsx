import React from "react";
import {getCountry, getFactsFromApiCall} from "../countrySource.js";
import {currentDifficulty, targetCountryState} from "../model/atoms.js";

function GameView(prop) {
    // console.log(prop)
    return (
        <div>
            {headerText()}
            <span>Round {prop.gameRound}</span>
            <div id={"GameLocation"}>
                <div id={"ClueLocation"}>
                    <ol>
                        {prop.factList.map((fact, index) => {
                            return <li key={index}>{handleFact(fact)}</li>
                        })}
                        {prop.guessNumber.map((msg, index) => {
                            return <li key={index}>{msg}</li>
                        })}
                    </ol>
                </div>
                <div id={"PictureLocation"}>
                    <h3>Get a picture from the country on your last guess!</h3>
                    {prop.guessNumber.length === 0 ?
                        <img id={"Waiting"} src={"https://media.tenor.com/13VnwKt5qS0AAAAd/waiting.gif"} alt={"Waiting gif"}/> : <img
                            src={"https://media.istockphoto.com/id/936681148/vector/lock-icon.jpg?s=612x612&w=0&k=20&c=_0AmWrBagdcee-KDhBUfLawC7Gh8CNPLWls73lKaNVA="}
                            alt={"picture of padlock"}/>}
                </div>
            </div>
            <span>{prop.gameState}</span>
            <br/>
            <input onChange={saveGuess}/>
            <button onClick={makeGuess}>Guess</button>
        </div>
    );

    function headerText() {
        if (prop.gameRound === 1) return (<div>
            <h1>Welcome to the game</h1>
        </div>)
        return (<div>
            <h1>Keep it going!</h1>
        </div>)
    }

    function saveGuess(event) {
        prop.registerGuess(event.target.value)
    }

    function makeGuess() {
        prop.guess()
    }

    function handleFact(fact) {
        let target = prop.targetCountry.includes("-") ? prop.targetCountry.replaceAll("-", " ") : prop.targetCountry
        if (fact.includes(target) || fact.includes(target)) return fact.replaceAll(target, "This country")
        return fact
    }
}

export default GameView;