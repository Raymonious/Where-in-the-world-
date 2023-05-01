import {BASE_URL, API_KEY} from "./apiConfig.js"
import {targetCountryState} from "./model/atoms.js";
import {useRecoilState} from "recoil";

// const [_, setTarget] = useRecoilState(targetCountryState)

const apiParams = {
    method: "GET",
    headers: {
        "X-Fungenerators-Api-Secret": API_KEY,
        'accept': 'application/json',
    }
};

// List of countries for the second api
// // Easy countries (over 10 million inhabitants)
// const easyCountries = ['CN', 'IN', 'US', 'ID', 'PK'];
//
// // Medium countries (between 1 million and 10 million inhabitants)
// const mediumCountries = ['CR', 'HR', 'CY', 'CZ', 'DK'];
//
// // Hard countries (below 1 million inhabitants)
// const hardCountries = ['AI', 'AQ', 'AG', 'AW', 'BS'];
//
// List of countries for the original API
// Countries with more than 10 million inhabitants
 const easyCountries = ['China', 'India', 'United States', 'Indonesia', 'Pakistan'];
//
// // Countries with between 1 million and 10 million inhabitants
 const mediumCountries = ['Algeria', 'Argentina', 'Bulgaria', 'Haiti', 'Jordan'];
//
// // Countries with maximum 1 million inhabitants
 const hardCountries = ['Belize', 'Comoros', 'Kiribati', 'Palau', 'Tuvalu'];

// list of countries accepted by the current API

const APIAccepted = [
    "Germany", "Spain", "Italy",
    "France", "Sweden", "Estonia",
    "Switzerland", "Chile", "Iceland",
    "Thailand", "Bahamas", "Bolivia",
    "Venezuela", "Honduras", "China",
    "Peru", "Paraguay", "Japan",
    "Guatemala", "Ivory-Coast", "Haiti",
    ]

export function getCountry(difficulty) {

    //return APIAccepted[Math.floor(Math.random() * APIAccepted.length)];
    switch (difficulty){
         case "easy":
             return easyCountries[Math.floor(Math.random() * easyCountries.length)];
         case "medium":
             return mediumCountries[Math.floor(Math.random() * mediumCountries.length)];
        case "hard":
             return hardCountries[Math.floor(Math.random() * hardCountries.length)];
     }
}

export function getFactsFromApiCall(URL) { // utility function
    function handleHTTPResponseACB(response) {
        if (response.status !== 200) throw new Error("Problems with the API, status: " + response.status);
        else {
            return response.json()
                .then(res => {
                    return res.contents.fact
                });
        }
    }

    // console.log(BASE_URL + URL)
    if (URL) return fetch(BASE_URL + URL, apiParams).then(handleHTTPResponseACB)
    return fetch(BASE_URL, apiParams).then(handleHTTPResponseACB)
    //["they like meatballs", "their population is 10 million", "they are nice people", "this is mock data", "in the name of testing"]
    // fetch(BASE_URL + URL, apiParams).then(handleHTTPResponseACB)
};

export function getFactList() {
    return Promise.all(Array(5).map((country) => {
        return getFactsFromApiCall(country)
    }))
}
