import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CreateNotes from "./pages/CreateNotes";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import EditUsers from "./pages/EditUsers";
import EditNotes from "./pages/EditNotes";
import Signup from "./pages/Signup";
import Abouts from "./pages/Abouts";
import Users from "./pages/Users";
import Notes from "./pages/Notes";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/edit-note/:id" element={<EditNotes />} />
        <Route path="/edit-user/:id" element={<EditUsers />} />
        <Route path="/create" element={<CreateNotes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 1000,
          removeDelay: 1000,
          style: {
            background: "rgba(30, 41, 59, 0.8)", // glassy dark-blue background
            color: "#fff",
            borderRadius: "12px",
            padding: "12px 16px",
            fontSize: "0.95rem",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.08)",
          },
          success: {
            duration: 2000,
            iconTheme: {
              primary: "#38bdf8",
              secondary: "#0f172a",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#0f172a",
            },
          },
        }}
      />
    </>
  );
};

export default App;
