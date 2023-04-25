import {atom, selector, selectorFamily} from "recoil";
import {getCountry, getFactsFromApiCall} from "../countrySource.js"
import { DET_URL, DET_URL2 } from "../apiConfig.js";
import { favoriteCountries } from "./persistant_atoms.js";

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

const roundWonState = atom({
    key: "roundWon",
    default: false
})

const targetCountryState = selector({
    key: "CurrentCountryName",
    default: null,
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
});

const curDetail = selector({
    key: "ResultDetail",
    get: function(recoil){return fetch(DET_URL + recoil.get(targetCountryState), detailAPI)
    .then(function(response){return response.json()})}
});


const playerLatestStreak = atom({
    key: "LatestAttemptStreak",
    default: 0
});

const playerLatestHighScore = atom({
    key: "LatestAttemptHighScore",
    default: 0
});

const currentLife = atom({
    key: "CurrentLifeLeft",
    default: 5
}
);



const currentFavCountry = atom({
    key: "CurrentSelectedCountry",
    default: 'Sweden'
}
);

const detailAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c5b6a6c744msh6897d7945fb4cd5p16e8e9jsna91430dc3256',
		'X-RapidAPI-Host': 'wiki-briefs.p.rapidapi.com'
	}
};

const detailAPI2 = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c5b6a6c744msh6897d7945fb4cd5p16e8e9jsna91430dc3256',
		'X-RapidAPI-Host': 'rest-country-api.p.rapidapi.com'
	}
};

const favDetail = selector({
    key: "DetailForCountry",
    get: function(recoil){return fetch(DET_URL + recoil.get(currentFavCountry) + "&topk=10", detailAPI)
    .then(function(response){return response.json()})}
});

const favDetail2 = selector({
    key: "DetailDataCountry",
    get: function(recoil){return fetch(DET_URL2 + recoil.get(currentFavCountry), detailAPI2)
    .then(function(response){return response.json()})}
});

export {currentDifficulty, targetCountryState, roundWonState, countryFacts, playerLatestStreak, playerLatestHighScore, currentLife, currentFavCountry, detailAPI, favDetail, favDetail2, curDetail, roundNumber, guessNumber, countryFact}