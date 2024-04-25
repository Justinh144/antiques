// import { useState } from 'react';

// import DadPic from '../assets/images/DadPic.jpg'

import tonka from '../../assets/images/tonka.jpg';
import dozer from '../../assets/images/Dozer.jpg'
import { Link } from 'react-router-dom';
// import Home from './Home';

export default function Home() {
   return (
    <div className="hero-container" style={{
      // display: 'flex', 
      //   flexWrap: 'wrap',
      //   alignItems: 'center',
      //   justifyContent: 'center',   
        // height: '100vw',       
        // width: '100vw',
        // margin: 0,
        // padding: 0         
    }}>
      <img 
      className="hero"
      src={dozer}
      alt= "Picture of refurbisher"
      style={{
        // maxWidth: '40%',        
        //   maxHeight: '100%',     
        //   objectFit: 'contain'
       }}/>



      <div className="links font30 marg30 nav platypi">
      <li><Link to="/home">Mail@mail.com</Link></li>
   
     
       
      </div>
     </div>
   
  );
  }

