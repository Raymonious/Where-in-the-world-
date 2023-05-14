import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SuspenseView(){
    return <Backdrop sx={{ color: 'white', zIndex: 10000 }}
    open={true}><CircularProgress color="inherit"/></Backdrop>;

}