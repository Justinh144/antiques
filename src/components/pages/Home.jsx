import justin from '../../../assets/images/Justin.jpg';

export default function Home() {
    return (
      <div className="container d-flex flex-column align-items-center">
        <h1 className="font70 beau margin20">Justin Hodges</h1>
        <p className="font30 nuni">
       
        </p>
        <img src={justin} className="img=fluid" style={{ width: "40%", height: "auto", borderRadius: "20px" }}/>
        <p class="beau margin30 font70">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello! My name is Justin Hodges and I recently completed Vanderbilt University's Programming certification.
        At this point in my life I had worked several jobs with computer based duties such as processing and filling shipping
        orders through a companies internal online sales app or ensuring that the stores physical inventory
        matched it's digital inventory. However while I did understand the fundamental concept of programming
        I knew next to nothing as far as actual code or syntax.</p>

        <p class="beau margin30 font70">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; I had been using computers my entire life and even built my own PC, 
        so after researching several possible trades that would be lucrative but would take some time, even a few years,
        I believed web developing was the best choice. Soon I would find that I genuinly did enjoy creating applications
        and debugging code as I learned new modules and technologies.</p>

        <p class="beau margin30 font70">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On the following tabs you will find my resume, a portfolio of apps I have made,
        links to my Github and linkedIn, and a contact form. As of typing this I have completed the certification less than a 
        week ago, and have several friends and family with their own business pursuits who could use an official website
        so I plan to be working on that while I search potential career oppertunities. I am interested in any
        and all work that needs to get done.
        </p>

        <p class="beau margin30 font70">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I appreciate you taking the time to read all this, I'll be updating it as I add new applications 
          and more about the tech industry. Hope to hear from you soon!

          </p>
          <p class="beau margin30 font70">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ~Justin Hodges
          </p>
       
        
      </div>
    );
  }
  