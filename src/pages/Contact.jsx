// import { useState } from 'react';

// import DadPic from '../assets/images/DadPic.jpg'

import tonka from '../../assets/images/tonka.jpg';
import dozer from '../../assets/images/Dozer.jpg'
import marks from '../../assets/images/marks.jpg'
import { Link } from 'react-router-dom';
// import Home from './Home';

export default function Home() {
   return (
    <div className="hero-container" style={{
           
    }}>
      <img 
      className="hero"
      src={marks}
      alt= "Picture of refurbisher"
      style={{
    
       }}/>
      
      <p className="paragraph text-white" ></p>
            
      <div className="aboutlinks font30 marg10 aboutMarg nav platypi">
{/*        
      <li><Link to="/about">About</Link></li> */}
      <li className="space marg85"><Link to="/home">JustinHodges2023@gmail</Link></li>
      {/* <li><Link to="/contact">Contact</Link></li> */}
       
      </div>
     </div>
   
  );
  }

