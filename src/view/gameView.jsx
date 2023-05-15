import React from "react";
import {APIAccepted, getCountry, getFactsFromApiCall} from "../countrySource.js";
import {currentDifficulty, targetCountryState} from "../model/atoms.js";
import {Autocomplete, TextField} from "@mui/material";
import bakcground from '../assets/Home.gif'
 
function GameView(prop) {
    // console.log(prop)
    return (
        <div style={{objectFit: 'cover'}}>
        <div width = "100%" className="home" style={{position:'absolute', zIndex:-1,}}>
            <div className="globe">
            <img id ={"backgroundMap"} style={{filter: "brightness(" + (0.5 + (prop.guessNumber - 1) * 0.2) + ""}} src={'https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}/>
            </div>
        </div>

        <div id={"gameTags"}>
            {prop.gameRound === 1 ? (<div>
                <h1>Welcome to the game</h1>
            </div>) : (<div>
                <h1>Keep it going!</h1>
            </div>)}
            <h3 style={{position:'relative', right: '12%'}}>Round {prop.gameRound}</h3>
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
                <Autocomplete
                    onChange={saveGuess}
                    disablePortal
                    id="input-box"
                    options= {APIAccepted}
                    sx={{ width: 300}}
                    renderInput={(params) => <TextField {...params} label="Country" />}
                />
                {/*<input onChange={saveGuess} value={prop.userGuess}/>*/}
                <button onClick={makeGuess}>Guess</button>
            </div>
        </div>
        </div>
    );

    function saveGuess(event) {
        // console.log(event.target.innerText)
        prop.registerGuess(event.target.innerText)
    }

    function makeGuess() {
        prop.guess()
    }

    function handleFact(fact, index) {
        if (!isNaN(fact[0] * 1)) {
            const factNumber = fact.slice(0, 2)
            const factText = fact.slice(2, fact.length).replaceAll(prop.targetCountry, "This country")
            return (<div className="unlockedFact" key={index}>
                <div className={"factNumber"}>{factNumber}</div>
                <div className={"factText"}><span>{factText}</span></div>
            </div>)
        }
        return (<div className="unlockedFact" key={index}><span/><span className={"factText"}>{fact.replaceAll(prop.targetCountry, "This country")}</span></div>)
    }
}

export default GameView;