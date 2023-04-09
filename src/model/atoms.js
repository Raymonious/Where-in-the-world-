import {atom, selector, selectorFamily} from "recoil";
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

const roundNumber = atom({
    key: "roundNumber",
    default: 1,
});

const guessNumber = atom({
    key: "Guess",
    default: 1
    }
);

const targetCountryState = selector({
    key: "CurrentCountryName",
    default: "Germany",
    get: function (recoil) {
        recoil.get(roundNumber)
        return getCountry(recoil.get(currentDifficulty))
    }
});

const countryFact = selectorFamily({
    key: "CurrentCountryFacts",
    default: [],
    get: (amountOfFacts) => (recoil) => {
        return getFactsFromApiCall(recoil.get(targetCountryState));
}
    // get: function (recoil) {
    //     if(recoil.get(guessNumber) === 1)
    //         return getFactsFromApiCall(recoil.get(targetCountryState));
    // }
});

const countryFacts = selector({
    key: 'countryFacts',
    get: function (recoil) {
        return [...Array(recoil.get(guessNumber)).keys()].map((index)=>{return recoil.get(countryFact(index))})
    }
})

const playerLatestStreak = atom({
    key: "LatestAttemptStreak",
    default: 0
});

const playerLatestHighScore = atom({
    key: "LatestAttemptHighScore",
    default: 0
});

export {currentDifficulty, roundNumber, guessNumber, targetCountryState, countryFact, countryFacts, playerLatestStreak, playerLatestHighScore}