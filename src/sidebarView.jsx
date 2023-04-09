import React from 'react';

export default function SidebarView(pikachu){
    return (
        <ul className='navBar'>
          <li className='tab'><a href="#/about">About</a></li>
          <li className='tab'><a href="#/leaderboard">Leaderboard</a></li>
          <li className='tab'><a href="#/game">Game</a></li>
          <li className='tab'><a href="#/home">Home</a></li>
          <li className='title'><a href="#/home">Where in the world?</a></li>
        </ul>
    );
}
