import {atom, selector} from "recoil";
import firebaseConfig from "../firebaseConfig.js";
import * as Recoil from "recoil";

import {initializeApp} from "firebase/app";
import {getDatabase, ref, get, off, set, onValue} from "firebase/database";

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const PATH = "testData/"

const playerLongestStreak = Recoil.atom({
    key: "LongestStreak",
    default: 10,
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, PATH)).then(data => data.val() || new Recoil.DefaultValue()));
            onSet(newStreak => set(ref(db, PATH + "Streak"), newStreak));
            onValue(ref(db, PATH), data => {
                if (data.val()) setSelf(data.val())
            });
            return () => off(ref(db,PATH));
        }
    ]
});

const playerHighScore = atom({
    key: "HighestScore",
    default: 0,
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, PATH)).then(data => data.val() || new Recoil.DefaultValue()));
            onSet(newHighScore => set(ref(db, PATH + "HighScore"), newHighScore));
            onValue(ref(db, PATH), data => {
                if (data.val()) setSelf(data.val())
            });
            return () => off(ref(db,PATH));
        }
    ]
});

const favoriteCountries = atom({
    key: "FavoriteCountryList",
    default: ["sweden", "USA"],
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, PATH)).then(data => data.val() || new Recoil.DefaultValue()));
            onSet(newCountry => set(ref(db, PATH + "Countries"), newCountry));
            onValue(ref(db, PATH), data => {
                if (data.val()) setSelf(data.val())
            });
            return () => off(ref(db,PATH));
        }
    ]
});

const globalHighScore = atom({
    key: "ScoreLeaderboard",
    default: [],
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, PATH)).then(data => data.val() || new Recoil.DefaultValue()));
            onSet(newTop10 => set(ref(db, PATH + "ScoreLeaderboard"), newTop10));
            onValue(ref(db, PATH), data => {
                if (data.val()) setSelf(data.val())
            });
            return () => off(ref(db,PATH));
        }
    ]
});

const globalLongestStreak = atom({
    key: "StreakLeaderboard",
    default: [],
    effects_UNSTABLE: [
        ({onSet, setSelf}) => {
            setSelf(get(ref(db, PATH)).then(data => data.val() || new Recoil.DefaultValue()));
            onSet(newTop10 => set(ref(db, PATH + "StreakLeaderboard"), newTop10));
            onValue(ref(db, PATH), data => {
                if (data.val()) setSelf(data.val())
            });
            return () => off(ref(db,PATH));
        }
    ]
});

export {playerLongestStreak, playerHighScore, favoriteCountries, globalHighScore, globalLongestStreak}