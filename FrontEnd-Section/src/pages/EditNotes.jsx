import EditNote from "../components/EditNotes/EditNote";
// import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
// import "react-toastify/dist/ReactToastify.css";

const EditNotes = () => {
  return (
    <>
      <EditNote />
      {/* <ToastContainer position="top-center" autoClose={1000} /> */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: "",
          duration: 500,
          removeDelay: 500,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </>
  );
};

export default EditNotes;
