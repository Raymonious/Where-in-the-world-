import LeaderboardView from "../view/leaderboardView.jsx";
import {useRecoilState} from "recoil";
import {globalLongestStreak} from "../model/persistant_atoms.js";
import { isGrantedAccess } from "../model/atoms.js";
import { Navigate } from "react-router-dom";
import SuspenseView from "../view/suspenseView.jsx";

export default function Leaderboard() {
    const [access] = useRecoilState(isGrantedAccess)
    const [leaderboardList] = useRecoilState(globalLongestStreak)

    // console.log(leaderboardList)
    if(!access){
        if(access === null) return <SuspenseView/>
        return <Navigate to="/login" replace/>
    }
    else {
        return (
            <LeaderboardView leaderboard={leaderboardList}/>
        );
    }
    
    
    
}