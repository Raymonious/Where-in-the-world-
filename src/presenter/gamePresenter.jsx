import * as Recoil from "recoil";
import {
    playerLongestStreak,
    playerHighScore,
    favoriteCountries,
    globalHighScore,
    globalLongestStreak,
    fireBaseAuth
} from "../model/persistant_atoms.js";
import {
    currentDifficulty,
    roundWonState,
    roundNumber,
    guessNumber,
    targetCountryState,
    countryFacts,
    playerLatestStreak,
    playerLatestHighScore,
    curDetail,
    gamesPlayed,
    isGrantedAccess
    
} from "../model/atoms.js";
import GameView from "../view/gameView.jsx"
import React, {useEffect, useState} from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {getFactsFromApiCall} from "../countrySource.js";
import ResultsView from "../view/resultsView.jsx";
import { Navigate } from "react-router-dom";

export default function Game() {
    const [access] = useRecoilState(isGrantedAccess)
    
    if(access === false){
        return <Navigate to="/login" replace/>
    }
    else if (access === true) {
    const [round, setRound] = useRecoilState(roundNumber)
    const [facts] = useRecoilState(countryFacts)
    const [userGuess, setUserGuess] = useState("")
    const [status, setStatus] = useState("Make a guess")
    const [amountGuess, setGuess] = useRecoilState(guessNumber)
    const [roundWon, setRoundWon] = useRecoilState(roundWonState)
    const [latestStreak, setLatestStreak] = useRecoilState(playerLatestStreak)
    const [longestStreak, setLongestStreak] = useRecoilState(playerLongestStreak)
    const [learderboard, setLeaderboard] = useRecoilState(globalLongestStreak)
    const [open, setOpen] = useState(false);
    const [curCountry, setCountry] = Recoil.useRecoilState(targetCountryState);
    const [curDiff, setDiff] = Recoil.useRecoilState(currentDifficulty);
    const difficulty = ['easy', 'medium', 'hard'];
    const [detail] = Recoil.useRecoilState(curDetail);
    const [numberOfGames, setNumberOfGames] = useRecoilState(gamesPlayed)
    const setFav = useSetRecoilState(favoriteCountries);
    const [favList] = useRecoilState(favoriteCountries);
        
    return (
        <div>
        <GameView
            gameRound = {round}
            guessNumber ={amountGuess}
            targetCountry={curCountry}
            factList={[...facts].splice(0, amountGuess)}
            registerGuess={registerGuess}
            guess={guess}
            gameState={status}
            openModal = {handleOpen}
        />
        <ResultsView open = {open} closeModal = {handleClose} curCountry = {curCountry} onNextCountry = {CountryModifierACB} list = {detail}
        onAddFav = {FavAdderACB} gameState = {roundWon}/>
    </div>
    );

    /*rough iterator between easy, medium and hard levels and set atom currentDifficulty to switch to next country for the next round*/ 
    function CountryModifierACB(){
        setOpen(false);
        if (roundWon) {
            setDiff(difficulty[round % 3]);
            setRound(round + 1);
            console.log("round won")
            console.log(latestStreak)
            console.log(longestStreak)
            console.log(latestStreak > longestStreak)
            if (latestStreak > longestStreak || !longestStreak) setLongestStreak(latestStreak)
        }
        else {
            checkIfLeaderboard()
            setNumberOfGames(numberOfGames+1)
            setRound(1)
        }
    }

    function checkIfLeaderboard(){
        // console.log("checking leaderboard")
        let results = [...learderboard, {score: latestStreak, name: fireBaseAuth.currentUser.displayName}]
        results.sort((a,b) => b.score-a.score)
        setLeaderboard(results.slice(0,results.length >= 10 ? 10 : results.length))
    }

    /*useSetRecoilState to set the targetCountryState atom with a new array including both the old ones and the newly added one*/ 
    function FavAdderACB(country){
        setOpen(false);
        if (favList.find((item) => item === country)) return;
        else{
        setFav((currentState) => [
            ...currentState,
            country,
          ]);
        }
    }



    function handleOpen(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }

    function registerGuess(guess) {
        let validGuess = guess.includes("-") ? guess.replaceAll("-", " ") : guess
        setUserGuess(validGuess)
    }

    function guess() {
        // let correctAnswer = curCountry.includes("-") ? curCountry.replaceAll("-", " ") : curCountry
        if (userGuess.toLowerCase() === curCountry.toLowerCase()) {
            setLatestStreak(round)
            // console.log(getFactsFromApiCall())
            setStatus("Correct! Well done")
            setRoundWon(true)
            // setRound(round + 1)
            setGuess(1)
            setOpen(true);
            //window.location.hash = "#/result"
        } else {
            setStatus("Wrong guess, try again.")
            setGuess(amountGuess + 1)
            if (amountGuess === 5) {
                setRoundWon(false)
                setLatestStreak(round)
                // setRound(1)
                setGuess(1)
                setStatus("Make a guess")
                //window.location.hash = "#/result"
                setOpen(true);
            }
        }
    }
}

else{
    const [round, setRound] = useRecoilState(roundNumber)
    const [facts] = useRecoilState(countryFacts) 
    
    return <div></div>
}


}
