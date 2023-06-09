import {atom, selector, selectorFamily, useRecoilState} from "recoil";
import {getCountry, getFactsFromAI, getFactsFromApiCall} from "../countrySource.js"
import { DET_URL, DET_URL2,IMG_URL, IMG_KEY } from "../apiConfig.js";
import { favoriteCountries, fireBaseAuth} from "./persistant_atoms.js";
import { onAuthStateChanged, signOut } from "firebase/auth";



const currentDifficulty = atom({
    key: "RoundDiff",
    default: "easy",
    effects: [
        ({onSet, setSelf}) => {
            onSet((newValue, oldValue) => {
                // console.log(newValue)
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
    default: null
})

const gamesPlayed = atom({
    key: "gamesPlayed",
    default: 0,
})

const targetCountryState = selector({
    key: "CurrentCountryName",
    default: null,
    get: function (recoil) {
        recoil.get(gamesPlayed)
        recoil.get(roundNumber)
        return getCountry(recoil.get(currentDifficulty))
    }
});

/*
const countryFact = selectorFamily({
    key: "CurrentCountryFacts",
    default: [],
    get: (amountOfFacts) => (recoil) => {
        return getFactsFromAI(recoil.get(targetCountryState));
}
    
});*/

const countryFacts = selector({
    key: 'countryFacts',
    get: function (recoil) {
        return getFactsFromAI(recoil.get(targetCountryState), 50, 5000);
    }
});

const curDetail = selector({
    key: "ResultDetail",
    get: function(recoil){return fetch(DET_URL + recoil.get(targetCountryState), detailAPI)
    .then(function(response){return response.json()})}
});


const singleImg = selectorFamily({
    key: "CurrentCountryI",
    default: [],
    get: (country) => (recoil) => {
        return fetch(DET_URL2 + country, detailAPI2).then(function(response){return response.json()}).then(function(response){return response.flags[0]})
}})


const countryDetail = selector({
    key: "CurrentCountryDs",
    get: function(recoil) {
        return [...recoil.get(favoriteCountries)].map((country) => {return (recoil.get(singleImg(country))
        
        )});
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

const currentSeleFav = atom({
    key: "CurrentSelectedFav",
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

const getImG = selector({
    key: "ImageForCountry",
    get: function(recoil){return fetch(DET_URL2 + recoil.get(currentFavCountry), detailAPI2)
    .then(function(response){return response.json()})}
});

const singleDetail = selector({
    key: "SelectFavCountry",
    get: function(recoil){return fetch(DET_URL + recoil.get(currentSeleFav) + "&topk=1", detailAPI)
    .then(function(response){return response.json()}).then(function(response){return response.summary[0]})}
});

const sessionType = atom({
    key:"signInOrsignUp",
    default: null,
});


/*Temporary atom to store signedUp or loggedIn state */
const isGrantedAccess = atom({
    key: "Access",
    default: null,

});



const imageAPI = {
	headers: {
		Authorization: IMG_KEY
	}
};


const singleImg2 = selectorFamily({
    key: "CurrentCountryImg",
    default: [],
    get: (country) => (recoil) => {
        return fetch(IMG_URL + country , imageAPI).then(function(response){return response.json()}).then(function(response){return response.photos[0].src})
}})


const countryDetail2 = selector({
    key: "CurrentCountryimgs",
    get: function(recoil) {
        return [...recoil.get(favoriteCountries)].map((country) => {return (recoil.get(singleImg2(country))        
        )});
}
});

const favoriteCImage = selector({
    key: "DetailPageImage",
    get: function(recoil)
    {return fetch(IMG_URL + recoil.get(currentFavCountry) , imageAPI).then(function(response){return response.json()}).then(function(response){return response.photos[0].src.original})
}})

const openModal = atom({
    key:"modalStatus",
    default: false
})

export {sessionType,openModal, countryDetail2, favoriteCImage,isGrantedAccess,getImG, gamesPlayed,singleDetail,currentDifficulty, targetCountryState, roundWonState, countryFacts, playerLatestStreak, playerLatestHighScore, currentLife, currentFavCountry, detailAPI, favDetail, favDetail2, curDetail, roundNumber, guessNumber, currentSeleFav /*countryFact*/}
