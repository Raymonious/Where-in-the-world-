import React from "react";
import Button  from "@mui/material/Button";
import Dialog  from "@mui/material/Dialog";
import  DialogTitle  from "@mui/material/DialogTitle";
import DialogContent  from "@mui/material/DialogContent";
import  DialogContentText  from "@mui/material/DialogContentText";
import  DialogActions  from "@mui/material/DialogActions";

export default function FavPopupView(props){
  function handleGame(){
    window.location.hash = "#/game";
  }
  function handleHome(){
    window.location.hash = "#/home";
  }


return (<Dialog open={true}>
        <DialogTitle>
          {"Your favorite list is empty and needs a little TLC"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Switch to Game mode to start building up your list of favorite countries!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleHome} >Home</Button>
          <Button onClick = {handleGame} autoFocus = {true}>
            Game
          </Button>
        </DialogActions>
      </Dialog>);

}
