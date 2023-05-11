import LeaderboardView from "../view/leaderboardView.jsx";
import {useRecoilState} from "recoil";
import {globalLongestStreak} from "../model/persistant_atoms.js";

export default function Leaderboard() {
    const [leaderboardList] = useRecoilState(globalLongestStreak)
    // console.log(leaderboardList)
    return (
            <LeaderboardView leaderboard={leaderboardList}/>
    )
}