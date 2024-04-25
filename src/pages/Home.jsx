// import { useState } from 'react';

// import DadPic from '../assets/images/DadPic.jpg'

import tonka from '../../assets/images/tonka.jpg';
import { Link } from 'react-router-dom';
// import Home from './Home';

export default function Home() {
   return (
    <div className="hero-container" style={{
        
    }}>
      <img 
      className="hero"
      src={tonka}
      alt= "Picture of refurbisher"
      style={{
      
       }}/>
      
      <div className="links font30 linkMarg nav platypi">
      <li><Link to="/about">About</Link></li>
      <li className="space"><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/contact">Contact</Link></li>
       
      </div>
     </div>
   
  );
  }

