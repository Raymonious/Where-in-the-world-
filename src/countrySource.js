import {BASE_URL, API_KEY} from "apiConfig.js"

const apiParams = {
    method: "GET",
    headers: {
        "X-Fungenerators-Api-Secret": API_KEY
    }
};

// Countries with more than 10 million inhabitants
const easyCountries = ['China', 'India', 'United States', 'Indonesia', 'Pakistan'];

// Countries with between 1 million and 10 million inhabitants
const mediumCountries = ['Algeria', 'Argentina', 'Bulgaria', 'Haiti', 'Jordan'];

// Countries with maximum 1 million inhabitants
const hardCountries = ['Belize', 'Comoros', 'Kiribati', 'Palau', 'Tuvalu'];

export function getCountry(difficulty){
    switch (difficulty){
        case "easy":
            return easyCountries[Math.floor(Math.random() * easyCountries.length)];
        case "medium":
            return mediumCountries[Math.floor(Math.random() * mediumCountries.length)];
        case "hard":
            return hardCountries[Math.floor(Math.random() * hardCountries.length)];
    }
}

export function getFactsFromApiCall(URL){ // utility function
    function handleHTTPResponseACB(respons){
        if (respons.status !== 200) throw new Error("Problems with the API, status: " + respons.status);
        else return respons.json();
    }
    return  ["they like meatballs", "their population is 10 million", "they are nice people", "this is mock data", "in the name of testing"]// fetch(BASE_URL + URL, apiParams).then(handleHTTPResponseACB)
}
