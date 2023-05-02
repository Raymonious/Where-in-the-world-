import {IMG_URL, IMG_KEY} from "./apiConfig.js"
import { currentFavCountry } from "./model/atoms.js";
import { favoriteCountries } from "./model/persistant_atoms.js";
import {atom, selector, selectorFamily} from "recoil";

const imageAPI = {
	headers: {
		Authorization: IMG_KEY
	}
};


const singleImg2 = selectorFamily({
    key: "CurrentCountryImg",
    default: [],
    get: (country) => (recoil) => {
        return fetch(IMG_URL + country , imageAPI).then(function(response){return response.json()}).then(function(response){return response.photos[0].src.original})
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

export {countryDetail2, favoriteCImage};