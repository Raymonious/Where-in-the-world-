import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box  from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import logo from "../assets/logo.png";
export default function ResultsView(pikachu) {
  
  /*click on backdrop or hit escape doesn't close modal pop up*/ 
  function handleClose(event, reason){
    if (reason === "escapeKeyDown") {
        console.log(reason);
      } else {
        pikachu.closeModal();
      }
  }

  /*javascript style for MUI third party components*/
  const style = {
    position: 'absolute',
    display:'flex',
    flexDirection: 'column',
    top: '48%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: ' #000066    ',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  
    borderRadius: 25,

  };

  function nextCountryACB(){
    pikachu.onNextCountry()
}

  function AddFavACB(){
    pikachu.onAddFav(pikachu.curCountry)
 }

  function backHomeACB(){
    window.location.hash = "#/home"
  }

  return (
    <div> 
    <Modal
      open={pikachu.open}
      onClose={handleClose}
      disableEscapeKeyDown = {true}
      sx={{borderRadius: 5}}
      slotProps={{ backdrop: { style: { backgroundColor: 'rgba(0,0,0,0.5)' } } }}

    ><Box sx={style}>
        <img src= {logo} className="logo"></img>
        {pikachu.gameState?
        <div> 
        <h2 style={{textAlign: 'center', color: 'white', fontSize: 25, position: "relative", top: 20}}> 🎉Bingo!🎉The country was...</h2>
        <h1 style={{textAlign: 'center',color: 'white'}}>{pikachu.curCountry}</h1></div>:
        <div> 
        <h2 style={{textAlign: 'center', color: 'white', fontSize: 25, position: "relative", top: 20}}>😟Nearly there!🤦‍the country was...</h2>
        <h1 style={{textAlign: 'center',color: 'white'}}>{pikachu.curCountry}</h1></div>}
        <div style={{textAlign: "center"}}>
        <img className = "resultsPic" src={pikachu.list.image}></img></div>
        <div className = "iconBtnContainer">
        <IconButton title="Next Round!" onClick = {nextCountryACB}><SportsEsportsOutlinedIcon sx={{fontSize: '2em', color: 'white'}}></SportsEsportsOutlinedIcon></IconButton>
        <IconButton title="Add to Favorite" onClick = {AddFavACB}><FavoriteBorderOutlinedIcon sx={{fontSize: '2em',color: 'white'}}></FavoriteBorderOutlinedIcon></IconButton>
        <IconButton title="Back to Home" onClick= {backHomeACB} ><HomeOutlinedIcon sx={{fontSize: '2em',color: 'white'}}></HomeOutlinedIcon></IconButton>
        </div>  
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
