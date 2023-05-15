import React from "react";
import Button  from "@mui/material/Button";
import Dialog  from "@mui/material/Dialog";
import  DialogTitle  from "@mui/material/DialogTitle";
import DialogContent  from "@mui/material/DialogContent";
import  DialogContentText  from "@mui/material/DialogContentText";
import  DialogActions  from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function FavPopupView(props){
  function handleGameACB(){
    window.location.hash = "#/game";
  }
  function handleHomeACB(){
    window.location.hash = "#/home";
  }


return (<Dialog open={true}>
        <DialogTitle sx = {{fontFamily: 'Audiowide'}}>
          {"Your favorite list is empty and needs a little TLC"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx = {{fontFamily: 'Audiowide'}}s>
            Switch to Game mode to start building up your list of favorite countries!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <IconButton title="Game!" onClick = {handleGameACB}><SportsEsportsOutlinedIcon sx={{fontSize: '1.5em', color: 'black'}}></SportsEsportsOutlinedIcon></IconButton>
        <IconButton title="Back to Home" onClick= {handleHomeACB} ><HomeOutlinedIcon sx={{fontSize: '1.5em',color: 'black'}}></HomeOutlinedIcon></IconButton>
        </DialogActions>
      </Dialog>);

}
