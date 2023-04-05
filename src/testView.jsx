import React from "react";

function testView(prop){

    return (
        <div>
            {/*{console.log(prop)}*/}
            <div className="persitant atoms">
                <h1>This is an example of the persistant atoms.</h1>
                <span>
                    Since the data is only stored as "testdata" in firebase, no player data is saved,
                    but here is the the longest saved streak. {prop.streak}
                </span>
                <button onClick={changeStreak}>Press me to increase the streak by 1</button>
                <br/>
                <span>This is the highscore saved for a player {prop.playerHighScore}</span>
                <br/>
                <span>this is the list of favorite countries saved in firebase: </span>
                {prop.favList.map(renderfavcCB)}
                <br/>
                <span>We also have a global high score list in firebase</span>
                {prop.gHighScore.map((score) => {
                    return <span> {score}</span>
                })}
                <br/>
                <span>And here is the longest streak leaderboard</span>
                {prop.gLongestStreak.map((streak) => {
                    return <span> {streak}</span>
                })}
            </div>
            <div>

            </div>
        </div>
    );

    function renderfavcCB(country){
        return <span>{country} </span>
    }

    function changeStreak(){
        prop.increaseStreak(prop.streak + 1)
    }
}

export default testView;