import Header from "../components/Header";
import Workout from "../assets/workout.png";
import exercise from "../assets/exercise.png";
import exc2 from "../assets/exc2.png";
import exc3 from  "../assets/exc3.png";
import "./togle.css";
import nextB from "../assets/next-icon.png";
import { Link } from "react-router-dom";

const WorkoutTracker = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-5 gap-5">
        <h1 className="text-3xl">Workout Tracker </h1>
        <img src={Workout} alt="exercise" />
        <div className="flex ">
          <h1 className="font-semibold mr-12">Upcoming Workout</h1>
          <span className="ml-12">see more</span>
        </div>
        <div className="flex flex-col items-center mt-5">
          <div
            className="bg-white border rounded-lg flex "
            style={{ width: "400px" }}
          >
            <img src={exercise} style={{ width: "50px" }} />
            <h3>Full Body Workout</h3>
            <p className="ml-5">Today 3pm</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div
            className="bg-white border rounded-lg flex "
            style={{ width: "400px" }}
          >
            <img src={exc2} style={{ width: "50px" }} />
            <h3>Upper Body Workout</h3>
            <p className="ml-5">4 Feb, 3:30 pm</p>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <h2>What Do You Want to Train?</h2>
        <div  className="bg-white border rounded-lg flex flex-col  "
            style={{ width: "400px" }}>
           <p>Full Body Workout</p>
           <p>Arms</p>
           <p>Chest</p>
           <img style={{width:"70px"}} src={exc3}/>
        </div>
        <Link to={"/workout-schedule"}>
      <button  style={{width:"50px"}}>{<img src={nextB}/>}</button>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutTracker;
