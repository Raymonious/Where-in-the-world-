function LeaderboardView(props){
    console.log(props)
    return(<div>
        <strong><h1>Leaderboard</h1></strong>
        <div className={"card"}>
            <div className={"card-header"}>Position</div>
            <div className={"card-body"}>Streak</div>
        </div>
        {props.leaderboard.map((streak, index) => {
            return (<div className={"card"}>
                <div className={"card-header"}>{index+1}</div>
                <div className={"card-body"}>{streak}</div>
            </div>)
        })}
    </div>)
}

export default LeaderboardView