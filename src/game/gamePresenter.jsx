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
    const [roundWon, setRoundWon] = useState(false)
    const [latestStreak, setLatestStreak] = useRecoilState(playerLatestStreak)
    const [longestStreak, setLongestStreak] = useRecoilState(playerLongestStreak)

    return (
        <GameView
            gameRound = {round}
            targetCountry={target}
            factList={facts}
            registerGuess={registerGuess}
            guess={guess}
            gameState={status}
        />
    );

    function registerGuess(guess) {
        setUserGuess(guess)
    }

    function guess() {
        if (userGuess.toLowerCase() === target.toLowerCase()) {
            // console.log(getFactsFromApiCall())
            setStatus("Correct! Well done")
            setRound(round + 1)
            setGuess(1)
            window.location.hash = "#/result"
        } else {
            setStatus("Wrong guess, try again.")
            setGuess(amountGuess + 1)
            if (amountGuess === 5) {
                setLatestStreak(round)
                if (latestStreak > longestStreak) setLongestStreak(latestStreak)
                setRound(1)
                setGuess(1)
                setStatus("Make a guess")
                window.location.hash = "#/result"
            }
        }
    }
}
