import React from 'react';
import logo from './assets/logo.png'

export const Login = () => {
  return  <>
    <img src={logo} alt='Logo' />
    <div className='card login'>
        <label htmlFor="name"></label>
        <input name='name' type="text" />
        <label htmlFor="name"></label>
        <input name='name' type="text" />
    </div>
    </>
}

export const Register = () => {
    return <>
        <img src={logo} alt='Logo' />
        <div className='card login'>
            <h2>Create Account</h2>
            <label htmlFor="name">Name</label>
            <input name='name' type="text" />
            <label htmlFor="email">Email</label>
            <input name='email' type="text" />
            <label htmlFor="password">Password</label>
            <input name='password' type="text" />
            <label htmlFor="confPassword">Confirm Password</label>
            <input name='confPassword' type="text" />
            <button>Next</button>
        </div>
    </>
};