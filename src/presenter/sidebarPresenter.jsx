import React from 'react'
import SidebarView from '../view/sidebarView.jsx'
import { isGrantedAccess } from '../model/atoms.js';
import { useRecoilState, useRecoilValue} from 'recoil';
import { useState, useEffect} from 'react';
import { fireBaseAuth } from '../model/persistant_atoms.js';
import { sessionType } from '../model/atoms.js';
import { onAuthStateChanged } from 'firebase/auth';

export default function Sidebar(){
    const [grantedAccess, changeAccess] = useRecoilState(isGrantedAccess);
    const [session] = useRecoilState(sessionType);
    
    onAuthStateChanged(fireBaseAuth, (user) =>{
        if(user){
            console.log(user.uid);
            if (session === "signUp") {
                console.log("User signed up");
                changeAccess(false);
              } else {
                // User signed in.
                changeAccess(true);
                console.log('User signed in');
              }
        }else{
            changeAccess(false)
            console.log("user logged out");
        }
    });

    return (
        <SidebarView accessRights = {grantedAccess}/>
    );
}