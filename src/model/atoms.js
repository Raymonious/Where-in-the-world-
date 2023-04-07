import {atom, selector} from "recoil";
import {getCountry, getFactsFromApiCall} from "../countrySource.js"

const currentDifficulty = atom({
    key: "RoundDiff",
    default: "easy",
    effects: [
        ({onSet, setSelf}) => {
            onSet((newValue, oldValue) => {
                console.log(newValue)
                if (!["easy", "medium", "hard"].find((item) => item===newValue)) {
                    setSelf(oldValue);
                    console.error("New difficulty not in list of accepted difficulties. Please enter either easy, medium or hard")
                }
            })
        }
    ]
});

const targetCountryState = selector({
    key: "CurrentCountryName",
    default: null,
    get: function (recoil) {
        return getCountry(recoil.get(currentDifficulty))
    }
});

const countryFacts = selector({
    key: "CurrentCountryFacts",
    default: [],
    get: function (recoil) {
        return getFactsFromApiCall();
    }
});

const playerLatestStreak = atom({
    key: "LatestAttemptStreak",
    default: 0
});

const playerLatestHighScore = atom({
    key: "LatestAttemptHighScore",
    default: 0
});

export {currentDifficulty, targetCountryState, countryFacts, playerLatestStreak, playerLatestHighScore}