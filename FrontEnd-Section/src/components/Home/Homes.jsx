import {
  FaStickyNote,
  FaCloudUploadAlt,
  FaLock,
  FaSyncAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Image } from "../../assets/Data";

const Homes = () => {
  const navigate = useNavigate();

  // useEffect(() => window.scrollTo(0, 0), []);

  const features = [
    {
      icon: <FaStickyNote />,
      title: "Organize Notes",
      desc: "Keep all your notes categorized, tagged, and easily searchable.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Cloud Backup",
      desc: "Sync your notes securely in real-time across all your devices.",
    },
    {
      icon: <FaLock />,
      title: "Encrypted & Private",
      desc: "Every note is protected with AES-256 encryption and JWT auth.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Auto Sync",
      desc: "Update once — changes reflect instantly everywhere.",
    },
  ];

  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 py-8 lg:py-14">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.15] anim-fade-up">
            Welcome to{" "}
            <span className="bg-accent text-white px-3 rounded-3xl shadow-clay-accent inline-block mt-2">
              NoteVault
            </span>
          </h1>
          <p className="text-primary/60 mt-6 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed anim-fade-up delay-1">
            Organize, secure, and access your notes from anywhere. Experience
            simplicity and speed with our cloud-based note system.
          </p>
          <button
            onClick={() => navigate("/create")}
            className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent/95 text-white px-7 py-4 rounded-3xl font-bold shadow-clay-accent active:shadow-clay-inset transition-all anim-fade-up delay-2"
          >
            + Create Your First Note
          </button>
        </div>

        <div className="flex-1 flex justify-center anim-fade-right">
          <div className="w-full max-w-sm sm:max-w-md p-5 bg-bg rounded-[40px] shadow-clay-lg border border-white/60">
            <img
              src={Image.NewNote}
              alt="Notes Illustration"
              className="w-full rounded-[28px] anim-bob"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mt-10 anim-fade">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-primary mb-10">
          Why Choose <span className="text-accent">NoteVault?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-bg rounded-clay p-6 shadow-clay border border-white/60
                hover:-translate-y-2 hover:shadow-clay-lg
                transition-all duration-300 cursor-pointer anim-fade-up"
            >
              <div className="w-14 h-14 rounded-2xl bg-tertiary/60 shadow-clay-sm flex items-center justify-center text-2xl text-accent mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-primary mb-1.5">{f.title}</h3>
              <p className="text-sm text-primary/55 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homes;
