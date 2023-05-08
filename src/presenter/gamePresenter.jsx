import * as Recoil from "recoil";
import {
    playerLongestStreak,
    playerHighScore,
    favoriteCountries,
    globalHighScore,
    globalLongestStreak,
    
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
    gamesPlayed
    
} from "../model/atoms.js";
import GameView from "../view/gameView.jsx"
import React, {useState} from "react";
import {useRecoilState, useSetRecoilState} from "recoil";
import {getFactsFromApiCall} from "../countrySource.js";
import ResultsView from "../view/resultsView.jsx";

export default function Game() {
    const [target, setTarget] = useRecoilState(targetCountryState)
    const [round, setRound] = useRecoilState(roundNumber)
    const [facts] = useRecoilState(countryFacts)
    const [userGuess, setUserGuess] = useState("")
    const [status, setStatus] = useState("Make a guess")
    const [amountGuess, setGuess] = useRecoilState(guessNumber)
    const [roundWon, setRoundWon] = useRecoilState(roundWonState)
    const [latestStreak, setLatestStreak] = useRecoilState(playerLatestStreak)
    const [longestStreak, setLongestStreak] = useRecoilState(playerLongestStreak)
    
    const [open, setOpen] = useState(false);
    const [curCountry, setCountry] = Recoil.useRecoilState(targetCountryState);
    const [curDiff, setDiff] = Recoil.useRecoilState(currentDifficulty);
    const difficulty = ['easy', 'medium', 'hard'];
    const [num, setNum] = useRecoilState(roundNumber);
    const [detail] = Recoil.useRecoilState(curDetail);
    const [numberOfGames, setNumberOfGames] = useRecoilState(gamesPlayed)
    const setFav = useSetRecoilState(favoriteCountries);
    const [favList] = useRecoilState(favoriteCountries)


    return (
        <div>
        <GameView
            gameRound = {round}
            guessNumber ={amountGuess}
            targetCountry={target}
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
            setDiff(difficulty[num % 3]);
            setNum(num + 1);
            console.log("round won")
            console.log(latestStreak)
            console.log(longestStreak)
            console.log(latestStreak > longestStreak)
            if (latestStreak > longestStreak || !longestStreak) setLongestStreak(latestStreak)
        }
        else {
            setNumberOfGames(numberOfGames+1)
            setNum(1)
        }
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
        let correctAnswer = target.includes("-") ? target.replaceAll("-", " ") : target
        if (userGuess.toLowerCase() === correctAnswer.toLowerCase()) {
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
