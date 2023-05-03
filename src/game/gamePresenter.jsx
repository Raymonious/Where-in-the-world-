import * as Recoil from "recoil";
import {
    playerLongestStreak,
    playerHighScore,
    favoriteCountries,
    globalHighScore,
    globalLongestStreak
} from "../model/persistant_atoms.js";
import {
    currentDifficulty,
    roundWonState,
    roundNumber,
    guessNumber,
    targetCountryState,
    countryFacts,
    playerLatestStreak,
    playerLatestHighScore
} from "../model/atoms.js";
import GameView from "./gameView.jsx"
import React, {useState} from "react";
import {useRecoilState} from "recoil";
import {getFactsFromApiCall} from "../countrySource.js";

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

    return (
        <GameView
            gameRound = {round}
            guessNumber ={amountGuess}
            targetCountry={target}
            factList={[...facts].splice(0, amountGuess)}
            registerGuess={registerGuess}
            guess={guess}
            gameState={status}
        />
    );

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
            window.location.hash = "#/result"
        } else {
            setStatus("Wrong guess, try again.")
            setGuess(amountGuess + 1)
            if (amountGuess === 5) {
                setRoundWon(false)
                setLatestStreak(round)
                if (latestStreak > longestStreak) setLongestStreak(latestStreak)
                // setRound(1)
                setGuess(1)
                setStatus("Make a guess")
                window.location.hash = "#/result"
            }
        }
    }
}
