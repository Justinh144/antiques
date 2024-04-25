


import penno from '../../assets/images/Penno.jpg'
import { Link } from 'react-router-dom';


export default function Home() {
   return (
    <div className="hero-container" style={{
        
    }}>
      <img 
      className="hero"
      src={penno}
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

