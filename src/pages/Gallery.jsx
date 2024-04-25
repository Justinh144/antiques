import { Link } from 'react-router-dom'

import blewett from '../../assets/images/blewett.jpg';
import tonka from '../../assets/images/tonka.jpg';
import ables from '../../assets/images/ables.jpg';
import alemite from '../../assets/images/alemite.jpg';
import autotrans from '../../assets/images/autotrans.jpg';
import penno from '../../assets/images/penno.jpg';
import camDoz from '../../assets/images/camoDozer.jpg';
import dumpMast from '../../assets/images/dumpMaster.jpg';
import greyDoz from '../../assets/images/greyDozer.jpg';
import dozer from '../../assets/images/Dozer.jpg'
import logger from '../../assets/images/logger.jpg';
import Cem1 from '../../assets/images/orangeCement.jpg';
import Cem2 from '../../assets/images/orangeCement2.jpg';
import tonk from '../../assets/images/tonkaToys.jpg';
import tonk2 from '../../assets/images/tonkJeep.jpg';
import art from '../../assets/images/art.jpg';
import musgo from '../../assets/images/musgo.jpg';



import { useEffect, useState } from 'react';
// Define a simple Header component
function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

function ImageModal({ isOpen, onClickClose, src, alt }) {
  if (!isOpen) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }} onClick={onClickClose}>
      <img src={src} alt={alt} style={{ maxHeight: '80%', maxWidth: '80%' }} />
    </div>
  )
}

function Gallery() {

  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setModalOpen(true);
    setCurrentImage(image);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useScrollToTop();
    return (
      <div className="gallery">
      <div className="divImg" onClick={() => handleImageClick(Cem1)}>
      <div className="textCenter text-white jacquard">
         Description: Green Truck
       <img className="gallImg" src={Cem1} alt="blewett Inc"/>
      </div>
      </div>

      <div className="divImg" onClick={() => handleImageClick(logger)}>
      <div className="textCenter text-white jacquard">
         Description: Green Truck
       <img className="gallImg" src={logger} alt="blewett Inc"/>
      </div>
      </div>
      
       <div className="divImg" onClick={() => handleImageClick(musgo)}>
      <div className="textCenter text-white jacquard">
         Description: Green Truck
       <img className="gallImg" src={musgo} alt="blewett Inc"/>
      </div>
      </div>

      <div className="divImg" onClick={() => handleImageClick(Cem2)}>
      <div className="textCenter text-white jacquard">
         Description: Green Truck
       <img className="gallImg" src={Cem2} alt="blewett Inc"/>
      </div>
      </div>

      <div className="divImg" onClick={() => handleImageClick(tonk2)}>
      <div className="textCenter text-white jacquard">
         Description: Green Truck
       <img className="gallImg" src={tonk2} alt="blewett Inc"/>
      </div>
      </div>

      <div className="divImg" onClick={() => handleImageClick(dumpMast)}>
      <div className="textCenter text-white jacquard">
         Description: Green Truck
       <img className="gallImg" src={dumpMast} alt="blewett Inc"/>
      </div>
      </div>

      <div className="divImg" onClick={() => handleImageClick(camDoz)}>
      <div className="textCenter text-white jacquard">
         Description: Green Truck
       <img className="gallImg" src={camDoz} alt="blewett Inc"/>
      </div>
      </div>

      <div className="divImg" onClick={() => handleImageClick(art)}>
      <div className="textCenter text-white jacquard">
         Description: Green Truck
       <img className="gallImg" src={art} alt="blewett Inc"/>
      </div>
      </div>

      <ImageModal isOpen={modalOpen} 
      onClickClose={handleCloseModal} src={currentImage} alt="EnlargedImage" />

      <div className="links font30 marg50 nav platypi">
      <li><Link to="/about">About</Link></li>
      <li className="space"><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/contact">Contact</Link></li>
       
      </div>




</div>
      
      
    );
  }
  
  // Export the Header component as the default export
  export default Gallery;