import React from 'react';

export default function SidebarView(pikachu){
    return (
<<<<<<< HEAD
        
=======
>>>>>>> 99512f54fe63a2c4bab3b2a962fa0fe6c80af680
        <ul className='navBar'>
          <li className='tab'><a href="#/about">About</a></li>
          <li className='tab'><a href="#/leaderboard">Leaderboard</a></li>
          <li className='tab'><a href="#/game">Game</a></li>
          <li className='tab'><a href="#/home">Home</a></li>
          <li className='title'><a href="#/home">Where in the world?</a></li>
        </ul>
    );
}
<<<<<<< HEAD
/*
        <div>
         <button class = "button" disabled = {pikachu.number > 1 ? false : true} onClick = {minusNumACB} >-</button>
         {pikachu.number}   
         <button class = "button" onClick = {plusNumACB}>+</button>   

         <table>
                <thead>
                </thead>
                <tbody>
                  {sortDishes(pikachu.dishes).map(dishesTableRowCB)}
                  <tr>
                    <td> </td>
                    <td class = "bold right">Total:</td>
                    <td> </td>
                    <td>{(menuPrice(pikachu.dishes) * pikachu.number).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
        </div>
        
   );
   function minusNumACB(eve){
    pikachu.onNumberChange(pikachu.number - 1);
   }
   function plusNumACB(eve){
    pikachu.onNumberChange(pikachu.number + 1);
   }

   function dishesTableRowCB(dish){
    return <tr key={dish.id}>
            <td><button class = "button" onClick = {xPressedACB}>x</button></td>
             <td class="center"><a href = "#/details" onClick = {linkDishACB}>{dish.title}</a></td>
             <td class="center">{dishType(dish)}</td>
             <td class="right">{(dish.pricePerServing * pikachu.number).toFixed(2)}</td>
           </tr>;

    function linkDishACB(eve){
      pikachu.dishInquired(dish);
      
    }

    function xPressedACB(eve){
      pikachu.dishRemoved(dish);
    }
}
  
}*/
=======
>>>>>>> 99512f54fe63a2c4bab3b2a962fa0fe6c80af680
