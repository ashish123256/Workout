import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import Oauth from "../components/Oauth";

const Signin = () => {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector(state=> state.user)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      dispatch(signInFailure("Email and password are required"));
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch(`http://localhost:5000/api/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 400 || data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data))
      navigate("/goal-option");
      
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
            <h1 className="text-5xl font-semibold">Welcome Back</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">
              Welcome back! Please enter your details.
            </p>
            <div className="mt-8">
              <div>
                <label className="text-lg font-medium">Email</label>
                <input
                  className="w-full  text-black border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="text-lg font-medium">Password</label>
                <input
                  className="w-full  text-black border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
              </div>
              <div className="mt-8 flex">
                <button className="font-medium text-base text-violet-500 ">
                  Forgot password
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-y-4">
                <button  className="active:scale-[.98] hover:scale-[1.01] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                 {loading ? 'Loading...' : 'Sign in'}
                </button>
                <Oauth/>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base">Dont have an account?</p>
                <Link to={"/sign-up"}>
                  <button className="text-violet-500  text-base font-medium ml-2">
                    Sign Up
                  </button>
                </Link>
              </div>
              {error && <p className="text-red-500 text-center mt-5">{error}</p>}
             
            </div>
          </div>
        </form>
      </div>
      <div className=" hidden lg:flex relative h-full items-center justify-center w-1/2  bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
};

export default Signin;
