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
    width: 700,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,


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
      <img style={{position:"absolute", top:280, left:"50%", transform:"translate(-50%, -50%)", height:70, width:70}} src= {logo}></img>
         <div style={{textAlign: "center",height: 280 ,backgroundImage:'url(https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',backgroundPositionX: "center",backgroundRepeat: "no-repeat", backgroundSize: "100%"}}>
</div> 
        {pikachu.gameState?
        <div> 
        <h2 style={{textAlign: 'center', color: 'black', fontSize: 25, position: "relative", top: 20}}> 🎉Bingo!🎉The country was...</h2>
        <h1 style={{textAlign: 'center',color: 'black'}}>{pikachu.curCountry}</h1></div>:
        <div> 
        <h2 style={{textAlign: 'center', color: 'black', fontSize: 25, position: "relative", top: 20}}>😟Nearly there!🤦‍the country was...</h2>
        <span><h1 style={{textAlign: 'center',color: 'black'}}>{pikachu.curCountry}</h1></span>
        <span style={{height: 32}}></span>
        </div>}
   
        <div className = "iconBtnContainer">
        <IconButton title="Next Round!" onClick = {nextCountryACB}><SportsEsportsOutlinedIcon sx={{fontSize: '2em', color: 'black'}}></SportsEsportsOutlinedIcon></IconButton>
        <IconButton title="Add to Favorite" onClick = {AddFavACB}><FavoriteBorderOutlinedIcon sx={{fontSize: '2em',color: 'black'}}></FavoriteBorderOutlinedIcon></IconButton>
        <IconButton title="Back to Home" onClick= {backHomeACB} ><HomeOutlinedIcon sx={{fontSize: '2em',color: 'black'}}></HomeOutlinedIcon></IconButton>
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
