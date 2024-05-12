
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
      
      <p className="paragraph text-white" >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; As a history teacher Tim has always had an inherit interest in antiques and items 
      from the past. His desire to refurbish vintage toy trucks actually began when he learned his brother was doing it.
      His natural interest in American history combined with the fact that these trucks reminded him of his childhood was
      all he needed to spark his interest in refurbishing them. Many of these trucks are older than some peoples parents 
      and can date back to as early as the 1920's.
      </p>

      <p className="paragraph text-white" >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Interesting pieces can be found in a wide variety of places like antique stores and
      yard sales. That combined with his brother looking for them means they are never short of projects to work on. The process
      begins with taking the truck apart and seeing if it is worth/can be salvaged. Then begins the time consuming act of
      sanding all the rust off, even with an electric sander this can take several hours as the pieces are much larger than
      todays toy vehicles ( some pieces are too large to fit into a conventional microwave).</p>

      <p className="paragraph text-white" >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Next is to repair any part of the metal that has been destroyed with filler pieces
      of scrap metal. After that he decides wether to hand paint or have it powder coated. Both options deliver great looking
      results but can also differ wildly in the final presentation. While Tim enjoys painting them this can be a very time consuming process 
      so he will sometimes take them to a local powder coating shop in town and pay them to do it. When I visited this shop and they were 
      currently powder coating the frames for some full sized racing buggies. The final part of the process to bring the piece together is 
      the detail painting of smaller parts like tires or messages/brands the client would like on the sides. 
      Tim says he'll sometimes ask his wife Lindsey to paint the text as her hand writing is better.
      </p>
            
      <p className="paragraph text-white" >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Many of these antiques can sell for a great return on the initial cost and while Tim does sell them
      he says that the money is nice but he gets far more enjoyment from taking these trucks that would otherwise
      be lost to time and bringing them into the modern age as works of art. He feels a great sense of pride upon gifting them to his friends 
      and family
      in the community. On the following tab you will find a gallery of his pieces but his catalogue is much more extensive
      and always growing. You will also find his contact email if you are interested in aquiring one of these pieces of history.
      He is always working on new projects and wants to eventually expand his business to other antiques beyond vintage toy trucks,
      if you have one reach out to him and he might be able to restore it back to life.
      </p> 

      <div className="aboutlinks font30 marg10 aboutMarg nav platypi">
       
      <li><Link to="/about">About</Link></li>
      <li className="space"><Link to="/gallery">Gallery</Link></li>
      <li><Link to="/contact">Contact</Link></li>
       
      </div>
     </div>
   
  );
  }

