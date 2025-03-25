import { motion } from "framer-motion";

export const Education = () => {
  const educationData = [
    {
      institution: "University College Dublin",
      degree: "MSc Computer Science",
      year: "2025",
    },
    {
      institution: "SRM Institute of Science and Technology, Chennai",
      degree: "B.Tech - IT",
      year: "2020",
    },
    {
      institution: "Venkateshwar International School, Delhi",
      degree: "Class 12",
      year: "2016",
    },
    {
      institution: "Bhartiyam Vidya Niketan, Gwalior",
      degree: "Class 10",
      year: "2014",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 bg-gray-900 text-white text-center"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>
        <div className="flex flex-col items-center space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 px-6 py-4 rounded-lg shadow-lg text-lg w-3/4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="text-blue-400">{edu.degree}</p>
              <p className="text-gray-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
