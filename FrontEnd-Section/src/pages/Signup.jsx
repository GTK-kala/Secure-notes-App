import SignUp from '../components/Accounts/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  return (
    <>
      <SignUp /> 
      <ToastContainer position='top-right' autoClose={1000}/>
    </>
  )
}

export default Signup