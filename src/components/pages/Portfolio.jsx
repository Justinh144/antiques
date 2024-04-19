import BJW from '../../../assets/images/BJW.png';
import Zesty from '../../../assets/images/zestyClip1.png';
import Planner from '../../../assets/images/Planner.jpg';
import Weather from '../../../assets/images/Weather.png';
import Quiz from '../../../assets/images/Quiz.jpg'
import Mountain from '../../../assets/images/Mountain.jpg'

export default function Portfolio() {
    return (
      <div>
        <p className="font70 class-textnuni black title beau" style={{ marginTop: "15px" }}>
          Some things I've worked on...</p>

      
    <div>
      <div className="container d-flex flex-column align-items-center justify-content-center my-5">
       <div className="text-center">
        <a href="https://hamsterbrain.onrender.com/" class="font50 nuni black">
          Hamster Brain
        </a>
       </div>
       <a href="https://hamsterbrain.onrender.com/" className="font50 nuni black container d-flex flex-column align-items-center justify-content-center my-5">
       <img src={Mountain} style={{ width: "70%", height: "auto", borderRadius: "40px", 
       border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
       </a>
      </div>

        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div className="text-center">  
        <a href="https://bjw-6acf89df7f9b.herokuapp.com/classic" class="font50 nuni black">
          Black Jack Wild
          </a>
          </div>
          <a href="https://bjw-6acf89df7f9b.herokuapp.com/classic" className="container d-flex flex-column align-items-center justify-content-center my-5">
          <img src={BJW} style={{ width: "70%", height: "auto", borderRadius: "40px", 
        border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black"}} />
          </a>
       </div>



       <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div className="text-center">
          <a href="https://warhawk1950.github.io/Zesty-Bytes/" class="font50 nuni black">
            Zesty Bytes
          </a>
        </div>
        <a href="https://warhawk1950.github.io/Zesty-Bytes/" className="container d-flex flex-column align-items-center justify-content-center my-5">
        <img src={Zesty} style={{ width: "70%", height: "auto", borderRadius: "40px",
      border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
      </a>
        </div>



        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div className="text-center">
          <a href="https://justinh144.github.io/DailyPlanner/" class="font50 nuni black">
            Daily Planner
          </a>
        </div >
        <a href="https://justinh144.github.io/DailyPlanner/" className="container d-flex flex-column align-items-center justify-content-center my-5">
        <img src={Planner} style={{ width: "70%", height: "auto", borderRadius: "40px", 
      border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
        </a>
        </div>


        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div  className="text-center">
          <a href="https://justinh144.github.io/WeatherApp/" class="font50 nuni black">
            Real Time Weather App
          </a>
        </div>
        <a href="https://justinh144.github.io/WeatherApp/" className="container d-flex flex-column align-items-center justify-content-center my-5">
        <img src={Weather} style={{ width: "70%", height: "auto", borderRadius: "40px", 
      border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
      </a>
        </div>


        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div className="text-center">
          <a href="https://justinh144.github.io/JavaQuiz/" class="font50 nuni black">
            Java Quiz
          </a>
        </div>
        <a href="https://justinh144.github.io/JavaQuiz/" className="container d-flex flex-column align-items-center justify-content-center my-5">
        <img src={Quiz} style={{ width: "70%", height: "auto", borderRadius: "40px",
      border: "20px solid rgb(58, 173, 48)", boxShadow: "0 0 0 10px black" }} />
      </a>
        </div>
        
       </div>
       </div>
       
       
     
       
       
    );
  }
  