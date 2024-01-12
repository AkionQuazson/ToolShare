import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './assets/logo.svg';
import './css/App.css';
import {BrowserRouter , Routes , Route, NavLink} from 'react-router-dom';
import { Box, Image, Button, Input } from '@chakra-ui/react';
import Home from './components/Home';
import {Login, Register} from './components/Auth';



function App() {
  // const onmount = () => {
  //   const options = {
  //     url: '/api/listing',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json;charset=utf-8'
  //     }
  //   }
  //   axios.get('/api/listing').then((res) => {
  //     console.log(res);
  //   });
  // }
  // useEffect(onmount, [])

  return (
    <>
      <BrowserRouter>
      <header>
        <div className="headerSplit">
          <NavLink to='/' >
            <Image 
              src={logo} 
              alt="Logo" 
              height={'65px'}
              margin={'20px'}
              />
            </NavLink>
          <NavLink className='nav' to='/categories' >Categories</NavLink>
          <NavLink className='nav' to='/list' >Your Tools</NavLink>
        </div>
        <div className="headerSplit">
          <Input variant='outline' bg={'white'} placeholder='Search'/>
          <NavLink className='nav' to='/login' >Login</NavLink>
        </div>

      </header>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
