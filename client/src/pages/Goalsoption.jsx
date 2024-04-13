import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";

const Goalsoption = () => {
  const [selectedGoals, setSelectedGoals] = useState({});

  const navigate = useNavigate();

  const handleCheckChange = (e) => {
    setSelectedGoals({
      ...selectedGoals,
      [e.target.id]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("selectedGoals", JSON.stringify(selectedGoals)); // Fix: Use JSON.stringify

    navigate("/workout-tracker");
  };

 

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-4xl mt-10 mb-4">What are your goals?</h1>
          <div className="bg-white flex border border-black w-80 p-2 rounded-lg">
            <label className="text-2xl mr-12" htmlFor="weight">
              Weight Loss
            </label>
            <input
              className="ml-9 size-5 mt-2"
              type="checkbox"
              id="weight"
              onChange={handleCheckChange}
            />
          </div>
          <div className="bg-white flex border border-black w-80 p-2 rounded-lg">
            <label className="text-2xl mr-12" htmlFor="muscle">
              Muscle Gain
            </label>
            <input
              className="ml-9 size-5 mt-2"
              type="checkbox"
              id="muscle"
              onChange={handleCheckChange}
            />
          </div>
          <div className="bg-white flex border border-black w-80 p-2 rounded-lg">
            <label className="text-2xl" htmlFor="Flexi">
              Flexibility and Mobility
            </label>
            <input
              className="ml-3 size-5 mt-2"
              type="checkbox"
              id="Flexi"
              onChange={handleCheckChange}
            />
          </div>
          <div className="bg-white flex border border-black w-80 p-2 rounded-lg">
            <label className="mr-12 text-2xl" htmlFor="gen">
              General Fitness
            </label>
            <input
              className="ml-9 size-5 mt-2"
              type="checkbox"
              id="gen"
              onChange={handleCheckChange}
            />
          </div>
          <div className="bg-white flex border border-black w-80 p-2 rounded-lg">
            <label className="text-2xl" htmlFor="eventS">
              Event-specific training
            </label>
            <input
              className="ml-2 size-5 mt-2"
              type="checkbox"
              id="eventS"
              onChange={handleCheckChange}
            />
          </div>
          <div className="bg-white flex border border-black w-80 p-2 rounded-lg">
            <label className="text-2xl" htmlFor="Mindfulness">
              Mindfulness and Mental Health
            </label>
            <input
              className="ml-9 size-7 mt-2"
              type="checkbox"
              id="Mindfulness"
              onChange={handleCheckChange}
            />
          </div>
          <Link to="/workout-tracker">
            <button
              type="submit"
              style={{ width: "200px" }}
              className="bg-violet-600 p-4 m-5 text-white"
            >
              Confirms
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Goalsoption;