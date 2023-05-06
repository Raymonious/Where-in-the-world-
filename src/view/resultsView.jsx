import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box  from "@mui/material/Box";
import Button from "@mui/material/Button";


export default function ResultsView(pikachu) {
  

  function handleClose(event, reason){
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
        console.log(reason);
      } else {
        pikachu.closeModal();
      }
  }

  const style = {
    position: 'absolute',
    display:'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: '#bbdefb',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  function nextCountryACB(){
    pikachu.onNextCountry()
}

  function AddFavACB(){
    pikachu.onAddFav(pikachu.curCountry)
 }


  return (
    <div> 
    <Modal
      open={pikachu.open}
      onClose={handleClose}
      disableEscapeKeyDown = {true}
    ><Box sx={style}>
        {pikachu.gameState?
        <h1>You guessed correct! <br></br>The country was <mark>{pikachu.curCountry}</mark></h1>:
        <h1>Almost there...<br></br>the country was <mark>{pikachu.curCountry}</mark></h1>}
        <div style={{textAlign: "center"}}>
        <img className = "resultsPic" src={pikachu.list.image}></img></div>  
        <Button onClick = {nextCountryACB}>Proceed to Next Round</Button>
        <Button onClick = {AddFavACB}>Add to Favorite</Button>
        <Button href="#/home">Back to HomePage</Button>
      </Box>
    </Modal>
    </div>
  );

  /*
  return (
        <div>
            <div>
            <h1 style={{fontFamily:'satisfy'}}>The country was {pikachu.curCountry}</h1>
            <img className="resultsPic" src={pikachu.list.image}></img>
            </div>
            <button onClick = {nextCountryACB}>Proceed to Next Round</button>
            <button onClick = {AddFavACB}>Add to Favorite</button>
            <a href="#/home">Back to HomePage</a>
        </div>
    );


    function nextCountryACB(){
        pikachu.onNextCountry()
    }

    function AddFavACB(){
        pikachu.onAddFav(pikachu.curCountry)
    }
*/
}
