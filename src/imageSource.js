import {IMG_URL, IMG_KEY} from "./apiConfig.js"
import { favoriteCountries } from "./model/persistant_atoms.js";

const imageAPI = {
	headers: {
		Authorization: IMG_KEY
	}
};


const singleImg2 = selectorFamily({
    key: "CurrentCountryImg",
    default: [],
    get: (country) => (recoil) => {
        return fetch(IMG_URL + country + "page=1&per_page=1&orientation=landscape", imageAPI).then(function(response){return response.json()}).then(function(response){return response.photos[0].url})
}})


const countryDetail2 = selector({
    key: "CurrentCountryimgs",
    get: function(recoil) {
        return [...recoil.get(favoriteCountries)].map((country) => {return (recoil.get(singleImg2(country))
        
        )});
}
});

export {countryDetail2};