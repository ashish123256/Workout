import StartImage from  "../assets/start.png";
import nextIcon from "../assets/next-icon.png";
import "./home.css"
import {Link } from "react-router-dom";


const Home = () => {
  return (
    <>
   <Link to={"/goal"}>
  <button className="btn" >Skip</button>
   </Link>
   
    <div className="container">
      <img style={{width:'500px'}} src={StartImage} alt="image"/>
      <h1 className="font-medium text-xl mb-4">Track Your Goal</h1>
      <p className="mb-4">Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
     <Link to={"/goal"}>
      <button style={{cursor:"pointer"}}>{<img src={nextIcon} style={{width:'40px'}} alt='Next Icon'/>}</button>
     </Link>
      
    </div>
    </>
  )
}

export default Home
