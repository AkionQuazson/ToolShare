import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './assets/logo.svg';
import './css/App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
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
      <Box flexDir={'column'} bg={'#191919'} textAlign={'left'}>
        <Image 
          src={logo} 
          alt="Logo" 
          height={'100px'}
          width={'100vw'}
        />
        <Button variant='ghost' color="white" >Categories</Button>
        <Button variant='ghost' color="white" >Explore</Button>
        <Input variant='outline' bg={'white'} placeholder='Search'/>
      </Box>
      <BrowserRouter>
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
