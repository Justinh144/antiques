import BJW from '../../../assets/images/BJW.png';
import Zesty from '../../../assets/images/zestyClip1.png';
import Planner from '../../../assets/images/Planner.jpg';
import Weather from '../../../assets/images/Weather.png';
import Quiz from '../../../assets/images/Quiz.jpg'

export default function Portfolio() {
    return (
      <div>
        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <h1 class="beau font70">Some things I've worked on...</h1>
        <div class="">
        <a href="https://bjw-6acf89df7f9b.herokuapp.com/classic" class="font30 nuni black">
          Black Jack Wild
          </a>
          </div>
        <img src={BJW} style={{ width: "70%", height: "auto", borderRadius: "40px", }} />
       </div>
       <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div>
          <a href="https://warhawk1950.github.io/Zesty-Bytes/" class="font30 nuni black">
            Zesty Bytes
          </a>
        </div>
        <img src={Zesty} style={{ width: "70%", height: "auto", borderRadius: "40px" }} />
        </div>
        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div>
          <a href="https://justinh144.github.io/DailyPlanner/" class="font30 nuni black">
            Daily Planner
          </a>
        </div>
        <img src={Planner} style={{ width: "70%", height: "auto", borderRadius: "40px" }} />
        </div>
        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div>
          <a href="https://justinh144.github.io/WeatherApp/" class="font30 nuni black">
            Real Time Weather App
          </a>
        </div>
        <img src={Weather} style={{ width: "70%", height: "auto", borderRadius: "40px" }} />
        </div>
        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div>
          <a href="https://justinh144.github.io/JavaQuiz/" class="font30 nuni black">
            Java Quiz
          </a>
        </div>
        <img src={Quiz} style={{ width: "70%", height: "auto", borderRadius: "40px" }} />
        </div>
        <div className="container d-flex flex-column align-items-center justify-content-center my-5">
        <div>
          <a href="https://justinh144.github.io/DailyPlanner/" class="font30 nuni black">
            Zesty Bytes
          </a>
        </div>
        <img src={Planner} style={{ width: "70%", height: "auto", borderRadius: "40px" }} />
        </div>
       </div>
       
       
     
       
       
    );
  }
  