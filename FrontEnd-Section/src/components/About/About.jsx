import { FaReact, FaNodeJs, FaDatabase, FaUserAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const boxes = [
    {
      icon: <FaReact />,
      title: "Frontend",
      desc: (
        <>
          Built using <strong>React.js</strong> for a smooth and interactive
          user experience.
        </>
      ),
    },
    {
      icon: <FaNodeJs />,
      title: "Backend",
      desc: (
        <>
          Powered by <strong>Node.js</strong> and <strong>Express</strong> for
          fast, secure, and scalable APIs.
        </>
      ),
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      desc: (
        <>
          Uses <strong>MySQL</strong> to store your notes safely and
          efficiently.
        </>
      ),
    },
    {
      icon: <FaUserAlt />,
      title: "Developer",
      desc: (
        <>
          Created by <strong>Khalid</strong>, a passionate full-stack web
          developer.
        </>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-bg rounded-[40px] p-6 sm:p-12 shadow-clay-lg border border-white/60"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-primary">
          About <span className="text-accent">Secure Notes</span>
        </h1>
        <p className="text-center text-primary/55 mt-3 mb-10 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          A modern, fast, and secure note-taking web app designed to keep your
          ideas safe and accessible — anytime, anywhere.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxes.map((b, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-bg rounded-clay border border-white/60 p-6 text-center shadow-clay hover:shadow-clay-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-tertiary/60 shadow-clay-sm flex items-center justify-center text-3xl text-accent mb-4">
                {b.icon}
              </div>
              <h3 className="font-bold text-primary mb-1.5">{b.title}</h3>
              <p className="text-sm text-primary/55 leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
