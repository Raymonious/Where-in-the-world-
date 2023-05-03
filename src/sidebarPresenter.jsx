import React from 'react'
import SidebarView from './sidebarView.jsx'
import { isGrantedAccess } from './model/atoms.js';
import { useRecoilState } from 'recoil';

export default function Sidebar(){
    const [grantedAccess] = useRecoilState(isGrantedAccess);

    return (
        <SidebarView accessRights = {grantedAccess}/>
    );
}