
import { useDispatch, useSelector } from "react-redux";
import { signOutFailure, signOutStart, signOutSuccess } from "../redux/user/userSlice";
import Header from "../components/Header";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();


  const handleSignOut = async() =>{
    dispatch(signOutStart())
     try {
      const res = await fetch(`http://localhost:5000/api/user/signout`);
      const data = res.json();
      if(data.success === false){
       dispatch(signOutFailure(data.message))
      }
      dispatch(signOutSuccess(data));
     } catch (error) {
      dispatch(signOutFailure(error.message))
     }
  }

 

  return (
    <>
    <Header/>
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>

      <form  className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          style={{ width: "10%" }}
          alt="profile"
          />
        <input
          type="text"
          placeholder="name"
          defaultValue={currentUser.firstname}
          className="border p-3 rounded-lg bg-white"
          id="username"
          
          />
        <input
          type="email"
          placeholder="email"
          defaultValue={currentUser.email}
          className="border p-3 rounded-lg bg-white"
          id="email"
          
          />

      </form>
      <div className="flex justify-center mt-5">
        <span className="cursor-pointer" onClick={handleSignOut}>Sign Out</span>
      </div>
    </div>
          </>
  );
};

export default Profile;
