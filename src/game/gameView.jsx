import React from "react";
import {getFactsFromApiCall} from "../countrySource.js";

function GameView(prop) {
    console.log(prop)
    return (
        <div>
            {headerText()}
            <span>round {prop.gameRound}</span>
            <ol>
                {prop.factList.map((fact, index) => {
                    return <li key={index}>{fact}</li>
                })}
            </ol>
            {/*<span>{prop.factList}</span>*/}
            <br/>
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

}

export default GameView;