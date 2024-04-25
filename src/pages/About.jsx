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
      
      <p className="paragraph text-white" >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contrary to popular belief, Lorem Ipsum is not simply random text. 
      It has roots in a piece of classical Latin literature from 45 BC, 
      making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
      looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
      and going through the cites of the word in classical literature, discovered the undoubtable source. 
      Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
      (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, 
      very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
2 and 1.10.33 from "de Finibus Bonorum et Malorucompanied by English versions from the 1914 translation by H. Rackham.</p>
            
      <div className="aboutlinks font30 marg10 aboutMarg nav platypi">
       
      <li><Link to="/about">About</Link></li>
      <li className="space"><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/contact">Contact</Link></li>
       
      </div>
     </div>
   
  );
  }

