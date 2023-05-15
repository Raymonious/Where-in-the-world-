import React from 'react';

export default function SidebarView(pikachu){
  return (
      pikachu.accessRights?
        <ul className='navBar'>
          <li className='tab'><a href="#/logout">Logout</a></li>
          <li className='tab'><a href="#/setting">Setting</a></li>
          <li className='tab'><a href="#/leaderboard">Leaderboard</a></li>
          <li className='tab'><a href="#/favorites">Favorite</a></li>
          <li className='tab'><a href="#/game">Game</a></li>
          <li className='tab'><a href="#/about">About</a></li>
          <li className='title'><a href="#/home">Where in the world?</a></li>
        </ul>:
        <ul className='navBar'>
        <li className='tab'><a href="#/about">About</a></li>
        <li className='tab'><a href="#/login">Login</a></li>
        <li className='title'><a href="#/home">Where in the world?</a></li>
        </ul>

    );
}
