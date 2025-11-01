import SideBar from "./components/SideBar/SideBar";
import { Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Abouts from "./pages/Abouts";
import Users from "./pages/Users";
import Notes from "./pages/Notes";
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
        <Route path="/notes" element = {<Notes />} />
        <Route path="/user" element ={<Users />} />
      </Routes>
    </>
  )
}

export default App