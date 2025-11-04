import EditUser from "../components/Accounts/EditUser/EditUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUsers = () => {
  return (
    <>
      <EditUser />
      <ToastContainer position="top-right" autoClose={1000}/>
    </>
  );
};

export default EditUsers;
