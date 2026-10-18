import EditNote from "../components/EditNotes/EditNote";
import { Toaster } from "react-hot-toast";

const EditNotes = () => (
  <>
    <EditNote />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 2000,
        style: {
          background: "#F8F6EE",
          color: "#2E3A2F",
          borderRadius: "16px",
          padding: "12px 18px",
          fontSize: "0.9rem",
          fontWeight: "600",
          boxShadow:
            "6px 6px 14px rgba(46,58,47,0.12), -6px -6px 14px rgba(255,255,255,0.9)",
          border: "1px solid rgba(255,255,255,0.6)",
        },
        success: { iconTheme: { primary: "#6B7F5B", secondary: "#F8F6EE" } },
        error: { iconTheme: { primary: "#C96F4F", secondary: "#F8F6EE" } },
      }}
    />
  </>
);
export default EditNotes;
