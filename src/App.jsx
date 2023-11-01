import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'

function App() {
  const onmount = () => {
    const options = {
      url: '/api/listing',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
    axios.get('/api/listing').then((res) => {
      console.log(res);
    });
  }
  useEffect(onmount, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Auth/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
