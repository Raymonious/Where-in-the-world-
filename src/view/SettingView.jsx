import React from 'react';
import photo from '../assets/photo.png'
export default function LoginView() {
    return (
        <div width="100%" className="login">
            <div className="formBox setting">
                <img src={photo} alt="" className='photo'/>
                <form className='from'>
                    <h5>Account Details</h5>
                    <div className='formItem'>
                        <label>First Name</label>
                        <input type="text" className="ipt" name='email' />
                    </div>
                    <div className='formItem'>
                        <label>Last Name</label>
                        <input type="text" className="ipt" name='email' />
                    </div>
                    <div className='formItem'>
                        <label>Email</label>
                        <input type="email" className="ipt" name='email' />
                    </div>
                    <div className='formItem'>
                        <label>Account Type</label>
                        <input type="text" className="ipt" name='email' />
                    </div>
                    <button className='btn' type='submit'>SAVE NEW CHANGES</button>
                </form>
            </div>
        </div>
    );
}