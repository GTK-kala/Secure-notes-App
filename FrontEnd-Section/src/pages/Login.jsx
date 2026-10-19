import LOGIN from "../components/Accounts/Login/LOGIN";
import { Toaster } from "react-hot-toast";

const Login = () => (
  <>
    <LOGIN />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 2000,
        style: {
          background: "var(--toast-bg, #F8F6EE)",
          color: "var(--toast-color, #2E3A2F)",
          borderRadius: "16px",
          padding: "12px 18px",
          fontSize: "0.9rem",
          fontWeight: "600",
          boxShadow:
            "6px 6px 14px rgba(46,58,47,0.12), -6px -6px 14px rgba(255,255,255,0.9)",
        },
        success: { iconTheme: { primary: "#6B7F5B", secondary: "#F8F6EE" } },
        error: { iconTheme: { primary: "#C96F4F", secondary: "#F8F6EE" } },
      }}
    />
  </>
);
export default Login;
