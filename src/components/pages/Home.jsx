import BusiCat from '../../../assets/images/BusiCat.webp';

export default function Home() {
    return (
      <div className="container d-flex flex-column align-items-center">
        <h1 className="font70 beau margin20">Justin Hodges</h1>
        <p className="font30 nuni">
         JustinHodges2023@gmail.com
        </p>
        <img src={BusiCat} className="img=fluid" style={{ width: "40%", height: "auto", borderRadius: "20px" }}/>
        <p class="beau margin30 font40">
        Hello and thank you! Like most people my interest in programming developed unbeknownst to
 
        unbeknownst I've dabbled in audio production, video game modding, 
        even the construction of my own personal computer. I've always wanted to pursue a technologie based career
        but was quite sure how to start. In the winter of 2023 I decided to sign up for Vanderbilt University's CodEx 
        programming certification. I was not entirely sure what to expect however once the course began I found 
        myself really enjoying the programming experience. It is very fulfilling to learn new technologies
        and overcome challenges and while it can be frustrating and humbling at times the experience is always 
        rewarding and every task completed opens up new challenges.</p>

        <p class="beau margin30 font40">On the following tabs you will find my resume, and list of applications I am most
        proud of and how to contact me. I am interested in any and all potential oppertunities and always looking
        to expand my knowledge. Thank you again for your time and I hope to hear from you soon. ~JH </p>
       
        
      </div>
    );
  }
  