import Header from "../components/Header";

const WorkoutSchedule = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Workout Schedule</h1>
        <div className="flex flex-col">
          <div className="grid grid-cols-7 gap-4 bg-white rounded-lg">
            <div className="text-center px-2 py-1 font-bold border border-black">
              Sun
            </div>
            <div className="text-center px-2 py-1 font-bold border border-black">
              Mon
            </div>
            <div className="text-center px-2 py-1 font-bold border border-black">
              Tue
            </div>
            <div className="text-center px-2 py-1 font-bold border border-black">
              Wed
            </div>
            <div className="text-center px-2 py-1 font-bold border border-black">
              Thu
            </div>
            <div className="col-span-2 text-center px-2 py-1 font-bold border border-black">
              Fri
            </div>
          </div>
          <div className="grid grid-cols-7 gap-4">
            <div className="text-center px-2 py-1 border border-black">5</div>
            <div className="text-center px-2 py-1 border border-black">6</div>
            <div className="text-center px-2 py-1 border border-black">7</div>
            <div className="text-center px-2 py-1 border border-black">8</div>
            <div className="text-center px-2 py-1 border border-black">9</div>
            <div className="text-center px-2 py-1 border border-black">10</div>
          </div>
          <div className="grid grid-cols-7 gap-4">
            <div className="text-center px-2 py-1 border border-black"></div>
            <div className="text-center px-2 py-1 border border-black"></div>
            <div className="text-center px-2 py-1 border border-black">
              <span className="text-sm">7:30am</span>
              <br />
              Ab Workout
            </div>
            <div className="text-center px-2 py-1 border border-black"></div>
            <div className="text-center px-2 py-1 border border-black">
              <span className="text-sm">9:00am</span>
              <br />
              Upperbody Workout
            </div>
            <div className="col-span-2 text-center px-2 py-1 border border-black"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutSchedule;
