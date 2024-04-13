import cycleImg from "../assets/cycle.png";
import nextIcon from "../assets/next-icon.png";
import "./home.css";
import {Link } from "react-router-dom";
const GetBurn = () => {
  return (
    <div className="bg-white">
    <Link to={"/sign-up"}>
    <button className="btn ">Skip</button>
    </Link>
    <div className="container bg-white">
      <img style={{width:'600px'}} src={cycleImg} alt ="cycle" />
      <h1 className="font-semibold text-xl mb-4">Get Burn</h1>
      <p className="mb-5">Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
      <Link to={'/sign-up'}>
      <button style={{cursor:"pointer"}}>{<img src={nextIcon} style={{width:'40px'}} alt='Next Icon'/>}</button>
      </Link>
    </div>
    </div>
  )
}

export default GetBurn
