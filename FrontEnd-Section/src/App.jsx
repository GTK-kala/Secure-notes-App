import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import { Routes , Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Abouts from "./pages/Abouts";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Note from "./pages/Note";

const App = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/signup" element ={<Signup />} />
        <Route  path="/dashboard" element ={<Dashboard />}/>
        <Route path="/create" element = {<Note />} />
        <Route path="/about" element = {<Abouts />} />
      </Routes>
    </>
  )
}

export default App