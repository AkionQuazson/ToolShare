import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Select, Input, Image } from '@chakra-ui/react';
import ToolCard from './ToolCard';
import '../css/Home.css'

const Home = () => {
  const [categories, setCategories] = useState([
    {name:'Assembly', show:false},
    {name:'Automotive', show:false},
    {name:'Cleaning', show:false},
    {name:'Cutting', show:false},
    {name:'Demolition', show:false},
    {name:'Electrical', show:false},
    {name:'Fastening', show:false},
    {name:'Gardening', show:false},
    {name:'Hand tools', show:false},
    {name:'Heavy machinery', show:false},
    {name:'Measuring', show:false},
    {name:'Painting', show:false},
    {name:'Plumbing', show:false},
    {name:'Power tools', show:false},
    {name:'Safety', show:false},
    {name:'Wood working', show:false},
    {name:'Misc.', show:false}
  ]);
    
    const categoryButtons = categories.map((cat, i) => {
      return <button 
      className={'categoryButton ' + (cat.show ? 'selected' : '')} 
      key={i} 
      onClick={(e) => {
        e.preventDefault();
        let tempCats = [...categories];
        tempCats[i].show = !categories[i].show;
        setCategories(tempCats);
      }}
      >
      {cat.name}
    </button>
  });

  // if all show are false, display all
  // otherwise, display only those in which show is true
  const listOfListings = [
    <ToolCard data={{image: 'img.jpg', availability: 'Jan 13', name: 'Electric belt sander rental', city: 'Chargoggagoggmanchauggagoggchaubunagungamaugg', state: 'Massachusetts', price: 24, interval: 'day'}}></ToolCard>,
    <ToolCard data={{image: 'img.jpg', availability: 'Now', name: 'Electric belt sander rental', city: 'Chargoggagoggmanchauggagoggchaubunagungamaugg', state: 'Massachusetts', price: 24, interval: 'day'}}></ToolCard>,
    <ToolCard data={{image: 'img.jpg', availability: 'Jan 13', name: 'Electric belt sander rental', city: 'Chargoggagoggmanchauggagoggchaubunagungamaugg', state: 'Massachusetts', price: 24, interval: 'day'}}></ToolCard>,
    <ToolCard data={{image: 'img.jpg', availability: 'Jan 13', name: 'Electric belt sander rental', city: 'Chargoggagoggmanchauggagoggchaubunagungamaugg', state: 'Massachusetts', price: 24, interval: 'day'}}></ToolCard>,
    <ToolCard data={{image: 'img.jpg', availability: 'Jan 13', name: 'Electric belt sander rental', city: 'Chargoggagoggmanchauggagoggchaubunagungamaugg', state: 'Massachusetts', price: 24, interval: 'day'}}></ToolCard>,
    <ToolCard data={{image: 'img.jpg', availability: 'Now', name: 'Electric belt sander rental', city: 'Chargoggagoggmanchauggagoggchaubunagungamaugg', state: 'Massachusetts', price: 24, interval: 'day'}}></ToolCard>
  ]

  return (<>
    <main className='homeWrapper'>
      <div className="filterHeader">
        <Input variant='outline' bg={'white'} placeholder='Search tools'/>
        <button>Filters</button>
        |
        <button>Within 50mi</button>
        {/* Filters buttons */}
      </div>
      <div className='categoryList'>
        {categoryButtons}
      </div>
      <Select placeholder='Sort by: '>
        <option value='availability'>Availability</option>
        <option value='price'>Price</option>
        <option value='rating'>Rating</option>
        <option value='distance'>Distance</option>
      </Select>
      <div style={{display: 'flex', margin: '25px auto 0', flexWrap: 'wrap', width: '1220px'}}>
        {listOfListings}
      </div>
      <button>View Map</button>
    </main>
    <footer>
      <div></div>        
      <div><NavLink to='/' >
            <Image 
              src={logo} 
              alt="Logo" 
              height={'65px'}
              margin={'20px'}
              />
            </NavLink></div>        
      <div className='footerButtons'>
        <button>About</button>
        <button>Contact Us</button>
        <button>Privacy</button>
        <button>Support</button>
        <button>Terms and Conditions</button>
      </div>
    </footer>
  </>)
}

export default Home;