import {atom, selector} from "recoil";
import {getCountry, getFactsFromApiCall} from "../countrySource.js"

const currentDifficulty = atom({
    key: "RoundDiff",
    default: "easy",
    effects: [
        ({onSet, setSelf}) => {
            onSet((newValue, oldValue) => {
                if (!["easy", "medium", "hard"].find(newValue)) {
                    setSelf(oldValue);
                    console.error("New difficulty not in list of accepted difficulties. Please enter either easy, medium or hard")
                }
            })
        }
    ]
});

const targetCountryState = selector({
    key: "CurrentCountryName",
    default: "Sweden",
    get: function (recoil) {
        return getCountry(recoil.get(currentDifficulty))
    }
});

const countryFacts = selector({
    key: "CurrentCountryFacts",
    default: ["they like meatballs", "their population is 10 million", "they are nice people", "this is mock data", "in the name of testing"],
    get: function (recoil) {
        return getFactsFromApiCall()
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