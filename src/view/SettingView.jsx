import React from 'react';
import {fireBaseAuth} from "../model/persistant_atoms.js";
export default function LoginView(props) {
    return (
        <div className="login">
            <div className="formBox setting">
                <form className='from'>
                    <h5>Account Details</h5>
                    <div className='formItem'>
                        <label>Display name</label>
                        <span>{fireBaseAuth.currentUser.displayName}</span>
                    </div>
                    <div className='formItem'>
                        <label>Highest streak</label>
                        <span>{props.highStreak}</span>
                    </div>
                    <div className='formItem'>
                        <label>Most recent streak</label>
                        <span>{props.recentStreak}</span>
                    </div>
                </form>
            </div>
        </div>
    );
}