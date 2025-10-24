import CreateNote from "../components/Notes/CreateNote"
import { ToastContainer } from "react-toastify"

const Note = () => {
  return (
    <>
      <CreateNote />  
      <ToastContainer position="top-right" autoClose={1000}/>
    </>
  )
}

export default Note