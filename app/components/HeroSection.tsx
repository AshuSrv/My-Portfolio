import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900 text-white">
      <motion.h1
        className="text-5xl font-extrabold mb-4"
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {` Hi, I'm Ashutosh Shrivastava`}
      </motion.h1>
      <motion.p
        className="text-xl mb-6 cursor-pointer"
        whileHover={{ scale: 1.1, transition: { duration: 0.25 } }}
        // drag
        // whileDrag={{ scale: 1.2, backgroundColor: "#f00" }}
        // dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Engineer | Frontend Specialist | Tech Enthusiast
      </motion.p>
    </section>
  );
};
