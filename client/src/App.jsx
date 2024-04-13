import GetBurn from "./components/GetBurn";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Goalsoption from "./pages/Goalsoption";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoutes";
import WorkoutTracker from "./pages/WorkoutTracker";
import WorkoutSchedule from "./pages/WorkoutSchedule";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/goal" element={<GetBurn />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route element= {<PrivateRoute/>}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/goal-option" element={<Goalsoption/>}/>
          <Route path="/workout-tracker" element={<WorkoutTracker/>} />
          <Route path="/workout-schedule" element={<WorkoutSchedule/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
