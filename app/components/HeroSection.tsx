import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {` Hi, I'm Ashutosh Shrivastava`}
      </motion.h1>
      <motion.p
        className="text-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Engineer | Frontend Specialist | Tech Enthusiast
      </motion.p>
      <motion.a
        href="#projects"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};
