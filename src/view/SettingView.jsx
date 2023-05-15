import React from 'react';
import {fireBaseAuth} from "../model/persistant_atoms.js";
export default function LoginView(props) {
    return (
        <div className="login">
            <div className="formBox setting">
                <form className='from'>
                    <h1>Account Details</h1>
                    <div className='formItem'>
                        <h3>Display name</h3>
                        <span>{fireBaseAuth.currentUser.displayName}</span>
                    </div>
                    <div className='formItem'>
                        <h3>Highest streak</h3>
                        <span>{props.highestStreak}</span>
                    </div>
                    <div className='formItem'>
                        <h3>Most recent streak</h3>
                        <span>{props.recentStreak}</span>
                    </div>
                </form>
            </div>
        </div>
    );
}