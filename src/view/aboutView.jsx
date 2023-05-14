function AboutView(props){
    return(<div className={"aboutView"}>
        <strong><h1>What is it?</h1></strong>
        <span>
            Where in the world? is a quiz-like game where you are presented with obscure facts about a country and get to guess the country.
        </span>
        <strong><h1>How does it work?</h1></strong>
        <span>
            Each round, you get presented with a fact. Enter your guess into the box and if it's wrong, you get another fact.
            For each country, you get five attempts to guess the country, each attempt adds another fact. Try to build up your streak for as long as possible! See if you made it into the <a href={props.access?"#/leaderboard":"#/login"}>leaderboard.</a>
            <h2 className={"playGameButton"}><a href={props.access?"#/game":"#/login"}>Play now!</a></h2>
        </span>

        <h3>Created by:</h3>
        <ul>
            <li>Raymond Chen, <a href={"mailto: rayche@kth.se"}>rayche@kth.se</a></li>
            <li>Xiangyi Kong, <a href={"mailto: xiangyik@kth.se"}>xiangyik@kth.se</a></li>
            <li>Litian Lei, <a href={"mailto: litian@kth.se"}>litian@kth.se</a></li>
            <li>Omid Mircoram, <a href={"mailto: mircoram@kth.se"}>mircoram@kth.se</a></li>
        </ul>
    </div>)
}

export default AboutView