import React, { useState } from 'react';
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
  // if all show are false, display all
  // otherwise, display only those in which show is true
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
  return (<>
    <main>
      <h1>Home</h1>
      {categoryButtons}
      {/* Listings (filtered) */}
    </main>
    <footer>
      <div></div>        
      <div></div>        
      <div></div>        
    </footer>
  </>)
}

export default Home;