import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Oauth from "../components/Oauth";

const Signup = () => {
  const [formData, setFormData ] = useState({});
  const navigate = useNavigate();

    const handleChange = (e) =>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      })
    }

  
    const handleSubmit =async(e) =>{
        e.preventDefault();
      try {
        const res = await fetch(`http://localhost:5000/api/user/signup`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData),
           });
           const data = await res.json();
           setFormData(data);
           navigate('/sign-in')
        
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
            <h1 className="text-5xl font-semibold">Create an account</h1>

            <div className="mt-8">
              <div>
                <input
                  className="w-full text-black border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                  type="text"
                  placeholder="First Name"
                  id="firstname"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="w-full  text-black border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent "
                  type="text"
                  placeholder="Last Name"
                  id="lastname"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="w-full  text-black border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent "
                  type="email"
                  placeholder="Email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  className="w-full   text-black border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent mb-4 "
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <div>
                  <input type="checkbox" id="proceeding" />
                  <label htmlFor="proceeding">
                    By proceeding, I agree to all T&C and Privacy Policy
                  </label>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-y-4">
                <button className="active:scale-[.98] hover:scale-[1.01] py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">
                  Create an Account{" "}
                </button>
                <Oauth/>
              </div>
              <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base">
                  Already have an account?
                </p>
                <Link to={"/sign-in"}>
                  <button className="text-violet-500  text-base font-medium ml-2">
                    Sign In
                  </button>
                </Link>
              </div>
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

export default Signup;
