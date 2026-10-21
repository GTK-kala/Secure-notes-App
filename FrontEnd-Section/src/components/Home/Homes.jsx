import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Image } from "../../assets/Data";
import {
  FaStickyNote,
  FaLock,
  FaCloudUploadAlt,
  FaSyncAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Homes = () => {
  const navigate = useNavigate();

  // useEffect(() => window.scrollTo(0, 0), []);

  const features = [
    {
      icon: <FaStickyNote />,
      title: "Smart Organization",
      desc: "Keep all your thoughts, tasks, and ideas categorized and instantly searchable.",
    },
    {
      icon: <FaLock />,
      title: "Bank-Level Security",
      desc: "Your notes are protected with AES-256 encryption so your privacy is never compromised.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Cloud Sync",
      desc: "Access your notes from any device, anywhere in the world, in real-time.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Auto Updates",
      desc: "Make a change on your phone; see it instantly on your desktop. Zero manual syncs.",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 py-12 lg:py-24">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/40 dark:bg-tertiary/10 text-primary dark:text-bg text-sm font-bold mb-6 border border-tertiary/50 dark:border-white/5 shadow-clay-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent anim-pulse-soft"></span>
            v2.0 is live now
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary dark:text-bg leading-[1.1] mb-6">
            Your thoughts,
            <br />
            beautifully{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#e28b6d]">
              organized.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-primary/60 dark:text-bg/60 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
            NoteVault is a secure, lightning-fast, and beautifully designed
            note-taking app. Capture ideas, organize your life, and access your
            notes from anywhere.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/95 text-white px-8 py-4 rounded-2xl font-bold shadow-clay-accent active:shadow-clay-inset transition-all text-lg group"
            >
              Get Started for Free
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/dashboard")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bg dark:bg-card-dark text-primary dark:text-bg px-8 py-4 rounded-2xl font-bold shadow-clay dark:shadow-[8px_8px_20px_rgba(0,0,0,0.4)] active:shadow-clay-inset transition-all text-lg border border-white/60 dark:border-white/5"
            >
              View Demo
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-primary/50 dark:text-bg/50 font-medium">
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-secondary dark:text-tertiary" />{" "}
              Free forever
            </span>
            <span className="flex items-center gap-1.5">
              <FaCheckCircle className="text-secondary dark:text-tertiary" /> No
              credit card
            </span>
          </div>
        </motion.div>

        {/* Right Image/Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center relative"
        >
          {/* Decorative background blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-10 w-40 h-40 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-2xl"></div>

          <div className="relative w-full max-w-md p-6 bg-bg dark:bg-card-dark rounded-[40px] shadow-clay-lg dark:shadow-[14px_14px_32px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/5 anim-bob z-10">
            <img
              src={Image.NewNote}
              alt="NoteVault Preview"
              className="w-full rounded-[28px]"
            />

            {/* Floating Clay Badge */}
            <div className="absolute -bottom-6 -left-6 bg-bg dark:bg-bg-dark p-4 rounded-2xl shadow-clay dark:shadow-[8px_8px_20px_rgba(0,0,0,0.5)] border border-white/60 dark:border-white/5 flex items-center gap-3 anim-fade-up delay-2">
              <div className="w-10 h-10 rounded-xl bg-accent shadow-clay-accent flex items-center justify-center">
                <FaLock className="text-white text-sm" />
              </div>
              <div>
                <p className="text-xs font-bold text-primary dark:text-bg">
                  Encrypted
                </p>
                <p className="text-[10px] text-primary/50 dark:text-bg/50">
                  100% Secure
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="py-20 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary dark:text-bg mb-4">
            Everything you need to{" "}
            <span className="text-accent">stay organized</span>
          </h2>
          <p className="text-primary/60 dark:text-bg/60 text-base">
            Powerful features wrapped in a beautifully simple interface.
            Designed to keep you focused on what matters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-bg dark:bg-card-dark rounded-clay p-8 shadow-clay dark:shadow-[8px_8px_20px_rgba(0,0,0,0.4)] border border-white/60 dark:border-white/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-tertiary/60 dark:bg-tertiary/20 shadow-clay-sm flex items-center justify-center text-2xl text-accent mb-6">
                {f.icon}
              </div>
              <h3 className="font-bold text-primary dark:text-bg text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-primary/55 dark:text-bg/55 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-primary dark:bg-card-dark rounded-[40px] p-10 sm:p-16 text-center shadow-clay-lg dark:shadow-[14px_14px_32px_rgba(0,0,0,0.5)] border border-white/10"
        >
          {/* Decorative circles inside CTA */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-bg mb-4">
              Ready to organize your life?
            </h2>
            <p className="text-bg/70 text-base sm:text-lg mb-8">
              Join thousands of users who trust NoteVault to keep their ideas
              safe and accessible.
            </p>
            <button
              onClick={() => navigate("/signup")}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/95 text-white px-8 py-4 rounded-2xl font-bold shadow-clay-accent active:shadow-clay-inset transition-all text-lg group"
            >
              Create Free Account
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Homes;
