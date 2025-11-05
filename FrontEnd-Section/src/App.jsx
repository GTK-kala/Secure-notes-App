import { Routes , Route } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./pages/Dashboard";
import EditUsers from "./pages/EditUsers";
import EditNotes from "./pages/EditNotes";
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
        <Route path="/edit-note/:id" element = {<EditNotes />} />
        <Route  path="/dashboard" element ={<Dashboard />}/>
        <Route path="/edit-user/:id" element={<EditUsers />} />
        <Route path="/signup" element ={<Signup />} />
        <Route path="/about" element = {<Abouts />} />
        <Route path="/create" element = {<Note />} />
        <Route path="/notes" element = {<Notes />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/user" element ={<Users />} />
        <Route path="/" element ={<Home />} />
      </Routes>
    </>
  )
}

export default App