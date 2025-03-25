import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-16  text-white text-center">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <p className="text-lg mb-4">
          Feel free to reach out for collaborations or any inquiries.
        </p>
        <p className="text-lg">
          Email:{" "}
          <a
            href="mailto:ashutoshmishra422@gmail.com"
            className="text-blue-400 hover:underline"
          >
            ashutoshmishra422@gmail.com
          </a>
        </p>
        <p className="text-lg">
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/ashutosh-shrivastava-62a93b159/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            linkedin.com/in/ashutosh-shrivastava
          </a>
        </p>
      </div>
    </section>
  );
};
