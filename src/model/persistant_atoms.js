import {atom, selector} from "recoil";
import firebaseConfig from "../firebaseConfig.js";
import * as Recoil from "recoil";

import {initializeApp} from "firebase/app";
import {getDatabase, ref, get, off, set, onValue} from "firebase/database";
import {getAuth} from "firebase/auth";

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const fireBaseAuth = getAuth()
const PATH = "userData/"

function getPlayerPath(){
    // console.log(fireBaseAuth.currentUser)
    return PATH + fireBaseAuth.currentUser.uid
}

const playerLongestStreak = atom({
    key: "LongestStreak",
    default: 0,
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, getPlayerPath() + "/Streak")).then(data => {
                data.val() || new Recoil.DefaultValue()
            }));
            onSet(newStreak => {
                console.log(newStreak)
                set(ref(db, getPlayerPath() + "/Streak"), newStreak)
            });
            onValue(ref(db, getPlayerPath() ), data => {
                // console.log(data)
                // console.log(data.val().Streak)
                if (data.val() && data.val().Streak) setSelf(data.val().Streak)
            });
            return () => off(ref(db,getPlayerPath()));
        }
    ]
});

const playerHighScore = atom({
    key: "HighestScore",
    default: 0,
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, getPlayerPath() + "/HighScore")).then(data => data.val() || new Recoil.DefaultValue()));
            onSet(newHighScore => set(ref(db, getPlayerPath() + "/HighScore"), newHighScore));
            onValue(ref(db, getPlayerPath()), data => {
                if (data.val() && data.val().HighScore) setSelf(data.val().HighScore)
            });
            return () => off(ref(db,getPlayerPath()));
        }
    ]
});

const favoriteCountries = atom({
    key: "FavoriteCountryList",
    default: [],
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, getPlayerPath() + "/Countries")).then(data => data.val() || new Recoil.DefaultValue()));
            onSet(newCountry => set(ref(db, getPlayerPath() + "/Countries"), newCountry));
            onValue(ref(db, getPlayerPath()), data => {
                if (data.val() && data.val().Countries) setSelf(data.val().Countries)
            });
            return () => off(ref(db,getPlayerPath()));
        }
    ]
});

const globalHighScore = atom({
    key: "ScoreLeaderboard",
    default: [200, 150, 100],
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, PATH + "ScoreLeaderboard")).then(data => data.val() || new Recoil.DefaultValue()));
            onSet(newTop10 => set(ref(db, PATH  + "ScoreLeaderboard"), newTop10));
            onValue(ref(db, PATH), data => {
                if (data.val() && data.val().ScoreLeaderboard) setSelf(data.val().ScoreLeaderboard)
            });
            return () => off(ref(db,PATH));
        }
    ]
});

const globalLongestStreak = atom({
    key: "StreakLeaderboard",
    default: [15, 2],
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, PATH+ "StreakLeaderboard")).then(data => data.val() || new Recoil.DefaultValue()));
            onSet(newTop10 => set(ref(db, PATH + "StreakLeaderboard"), newTop10));
            onValue(ref(db, PATH), data => {
                if (data.val() && data.val().StreakLeaderboard) setSelf(data.val().StreakLeaderboard)
            });
            return () => off(ref(db,PATH));
        }
    ]
});

export {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak}