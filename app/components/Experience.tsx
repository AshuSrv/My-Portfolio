import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "Amazon Web Services",
      role: "Software Development Engineer",
      duration: "June 2025 - Present",
    },
    {
      company: "HashedIn by Deloitte",
      role: "Software Engineer",
      duration: "Jan 2022 - Aug 2024",
    },
    {
      company: "Standard Chartered GBS",
      role: "Developer - Technology and Innovation",
      duration: "Sept 2020 - Dec 2021",
    },
    {
      company: "Outstrip",
      role: "Associate Software Developer (Intern)",
      duration: "Oct 2019 - Mar 2020",
    },
  ];

  return (
    <section id="experience" className="py-16  text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
              <p className="text-lg text-blue-400">{exp.role}</p>
              <p className="text-sm text-gray-400">{exp.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
