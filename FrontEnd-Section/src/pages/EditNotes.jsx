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
          background: "#242723", // dark mode card color
          color: "#F8F6EE", // bg color
          borderRadius: "16px",
          padding: "12px 18px",
          fontSize: "0.9rem",
          fontWeight: "600",
          boxShadow:
            "6px 6px 14px rgba(0,0,0,0.4), -6px -6px 14px rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.05)",
        },
        success: { iconTheme: { primary: "#6B7F5B", secondary: "#242723" } },
        error: { iconTheme: { primary: "#C96F4F", secondary: "#242723" } },
      }}
    />
  </>
);
export default EditNotes;
