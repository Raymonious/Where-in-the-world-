function LeaderboardView(props) {
    // console.log(props)
    return (
        <div id={"leaderboard"}>
            <strong><h1>Leaderboard</h1></strong>
            <table>
                <thead>
                <tr>
                    <th>Position</th>
                    <th>User</th>
                    <th>Streak</th>
                </tr>
                </thead>
                <tbody>
                {props.leaderboard.map((streak, index) => {
                    return (<tr key={index}>
                        <td>{index+1}.</td>
                        <td>{streak.name}</td>
                        <td>{streak.score}</td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>

        // <div>
        // <strong><h1>Leaderboard</h1></strong>
        // <div className={"tableLocation"}>
        //     <table>
        //         <tr className={"card"}>
        //             <td className={"card-header"}>Position</td>
        //             <td className={"card-body"}>Streak</td>
        //         </tr>
        //         <tbody>
        //         {props.leaderboard.map((streak, index) => {
        //             return (<tr className={"card"} key={index}>
        //                 <td className={"card-header"}>{index + 1}</td>
        //                 <td className={"card-body"}>{streak}</td>
        //             </tr>)
        //         })}
        //         </tbody>
        //     </table>
        // </div>
    // </div>
)
}

export default LeaderboardView