import LOGIN from "../components/Accounts/Login/LOGIN";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <>
       <LOGIN />
       <ToastContainer position="top-right" autoClose={1000}/>
    </>
  )
}

export default Login