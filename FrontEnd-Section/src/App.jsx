import SideBar from "./components/SideBar/SideBar";
import { Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CreateNotes from "./pages/CreateNotes";
import Dashboard from "./pages/Dashboard";
import SomeNotes from "./pages/SomeNotes";
import EditUsers from "./pages/EditUsers";
import EditNotes from "./pages/EditNotes";
import NotFound from "./pages/NotFound";
import AllUsers from "./pages/AllUsers";
import AllNote from "./pages/AllNote";
import Signup from "./pages/Signup";
import Abouts from "./pages/Abouts";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/edit-note/:id" element = {<EditNotes />} />
        <Route path="/some-notes/:id" element ={<SomeNotes />} />
        <Route path="/edit-user/:id" element={<EditUsers />} />
        <Route path="/create" element = {<CreateNotes />} />
        <Route  path="/dashboard" element ={<Dashboard />}/>
        <Route path="/notes" element = {<AllNote />} />
        <Route path="/user" element ={<AllUsers />} />
        <Route path="/signup" element ={<Signup />} />
        <Route path="/about" element = {<Abouts />} />
        <Route path="/login" element ={<Login />} />
        <Route path="*" element ={<NotFound />} />
        <Route path="/" element ={<Home />} />
      </Routes>
    </>
  )
}

export default App