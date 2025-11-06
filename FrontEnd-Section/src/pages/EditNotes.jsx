import EditNote from "../components/EditNotes/EditNote";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditNotes = () => {
  return (
    <>
      <EditNote />
      <ToastContainer position="top-right" autoClose={1000} />
    </>
  )
}

export default EditNotes