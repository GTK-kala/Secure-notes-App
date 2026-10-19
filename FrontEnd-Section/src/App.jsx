import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
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
    <div className="min-h-screen bg-bg">
      <NavBar />
      <SideBar />

      {/* Main Content Area */}
      <main className="transition-all duration-300 md:ml-64 pt-6 pb-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/edit-note/:id" element={<EditNotes />} />
            <Route path="/some-notes/:id" element={<SomeNotes />} />
            <Route path="/edit-user/:id" element={<EditUsers />} />
            <Route path="/create" element={<CreateNotes />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/notes" element={<AllNote />} />
            <Route path="/user" element={<AllUsers />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<Abouts />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
