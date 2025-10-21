import NavBar from "./components/NavBar/NavBar"
import SideBar from "./components/SideBar/SideBar"
import {Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

const App = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/signup" element ={<Signup />} />
      </Routes>
    </>
  )
}

export default App