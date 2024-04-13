import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Header = () => {
  const {currentUser} = useSelector(state=> state.user)
  return (
    <header className=" bg-violet-500 shadow-md">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/goal-option">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-black">Goals</span>
           
          </h1>
        </Link>
        <ul className="flex gap-4">
          
          <Link to="/profile">
            {currentUser ? (
              <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile"/>
            ):(
            ""
            )}
            
          </Link>
        </ul>

        
      </div>
    </header>
  )
}

export default Header
