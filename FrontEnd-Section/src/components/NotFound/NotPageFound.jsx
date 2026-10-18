import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotPageFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[75vh] flex justify-center items-center px-4">
      <div className="bg-bg rounded-[40px] p-8 sm:p-12 max-w-md w-full text-center shadow-clay-lg border border-white/60 anim-fade-up">
        <div className="w-24 h-24 mx-auto rounded-3xl bg-tertiary/60 shadow-clay-sm flex items-center justify-center mb-5">
          <FaExclamationTriangle className="text-accent text-4xl anim-bob" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-primary mb-3">
          404 — Page Not Found
        </h1>
        <p className="text-primary/55 text-sm sm:text-base mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist or may have been
          moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/95 text-white px-6 py-3.5 rounded-2xl font-bold shadow-clay-accent active:shadow-clay-inset transition-all"
        >
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotPageFound;
