import {atom, selector} from "recoil";
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

export {currentDifficulty, targetCountryState, countryFacts, playerLatestStreak, playerLatestHighScore, currentLife, currentFavCountry, detailAPI, favDetail, favDetail2}