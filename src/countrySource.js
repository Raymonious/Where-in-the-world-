import {BASE_URL, API_KEY, OPENAI_KEY} from "./apiConfig.js"
import {targetCountryState} from "./model/atoms.js";
import {useRecoilState} from "recoil";
import { Configuration, OpenAIApi } from "openai";

// const [_, setTarget] = useRecoilState(targetCountryState)

const apiParams = {
    method: "GET",
    headers: {
        "X-Fungenerators-Api-Secret": API_KEY,
        'accept': 'application/json',
    }
};


/*chatGPT params setup*/
const configuration = new Configuration({
    apiKey: OPENAI_KEY
});
delete configuration.baseOptions.headers['User-Agent'];
const openai = new OpenAIApi(configuration);

/*chatGPT call utility function */
export function getFactsFromAI(URL, attempts) {
    if(!URL) {
        return;
    }
    
    /*need to improve instructions */
    //const instructions = 'generate 1 lesser known trivia about ' + URL; 
    // const instructions = 'Generate 5 lesser known trivia about a certain country specified by the user, hide any details in the fact that reveal the identity of the country,' +
    // 'i.e. replace Chinese with "people" or "language", replace China with "this country", ' +'return the facts in an array of String type of size 5. ' +
    //  'For example: ["This country has the most population in the world", "The language spoken by the people of this country are'
    // ' among the most difficult to learn", "this country...", "this country...", "this country..."]';

    const instructions = "You are a random fact generator. Your purpose is to generate facts for a country for a game. The user will have to guess the country based on the facts you presented. " +
        "The facts you generate do not include the name of the country." +
        "Generate 5 random, lesser known, trivia about a certain country specified " +
        "by the user. For each fact, Hide any identifiers of the country. For instance, hide the name of the country, " +
        "the name of the people and the language. Replace any instance of the name of the country with 'This country' " +
        "Only return the facts, no other text wanted." +
        "Return the facts numbered, with one new fact each line. " +
        "Return new facts every time, even if the country being asked for is the same as before."
    /*Specify role of system or user, content for context of conversation */
    let input = [{role: 'system', content: instructions}, {role: 'user', content: URL}];

    /*use completion endpoint of chatgpt model */
    return openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        temperature: 1,
        presence_penalty: 2,
        messages: input,
        //more options available
    }).then(handleAPIRespons).catch(handleAPIError)

    function handleAPIRespons(res){
        // console.log(res)
        // console.log(res.data.choices[0].message.content.split("\n"));
        return res.data.choices[0].message.content.replaceAll("-", " ").split("\n");
    }

    function handleAPIError(err){
        if(attempts === 0){
            return ["Sorry, API does not work currently, please refresh the page. You will lose your progress nerd"]
        }
        // console.log(attempts)
        // console.log("API issues, please wait...")
        // console.log(err)
        return sleep(500).then(()=> getFactsFromAI(URL, attempts-1))
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}



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

const APIAccepted = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia",
    "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin",
    "Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
    "Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros",
    "Democratic Republic of the Congo","Republic of the Congo","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus",
    "Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador",
    "Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia",
    "Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary",
    "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan",
    "Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya",
    "Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta",
    "Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro",
    "Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger",
    "Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama",
    "Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda",
    "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino",
    "Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia",
    "Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan",
    "Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga",
    "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates",
    "United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam",
    "Yemen","Zambia","Zimbabwe"]

export function getCountry(difficulty) {

    return APIAccepted[Math.floor(Math.random() * APIAccepted.length)];
    /*
    switch (difficulty){
         case "easy":
             return easyCountries[Math.floor(Math.random() * easyCountries.length)];
         case "medium":
             return mediumCountries[Math.floor(Math.random() * mediumCountries.length)];
        case "hard":
             return hardCountries[Math.floor(Math.random() * hardCountries.length)];
     }
     */
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
