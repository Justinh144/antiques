// import { useState } from 'react';

// import DadPic from '../assets/images/DadPic.jpg'

import tonka from '../../assets/images/tonka.jpg';
import dozer from '../../assets/images/Dozer.jpg'
import { Link } from 'react-router-dom';
// import Home from './Home';

export default function Home() {
   return (
    <div className="hero-container" style={{
             
    }}>
      <img 
      className="hero"
      src={dozer}
      alt= "Picture of refurbisher"
      style={{
      
       }}/>



      <div className="links font30 marg30 nav platypi">
      <li><Link to="/home">Mail@mail.com</Link></li>
   
     
       
      </div>
     </div>
   
  );
  }

