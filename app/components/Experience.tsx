import { motion } from "framer-motion";

export const Experience = () => {
  const experiences = [
    {
      company: "HashedIn by Deloitte",
      role: "Software Engineer",
      duration: "Jan 2022 - Aug 2024",
      description:
        "Led frontend development for hiring tools, optimized data tables reducing render time by 80%. Managed multiple EPICs and enhanced internal tools.",
    },
    {
      company: "Standard Chartered GBS",
      role: "Developer - Technology and Innovation",
      duration: "Sept 2020 - Dec 2021",
      description:
        "Developed projects using ReactJS and Spring Boot, improved service journey speeds by 30% for the African market.",
    },
    {
      company: "Outstrip",
      role: "Associate Software Developer (Intern)",
      duration: "Oct 2019 - Mar 2020",
      description:
        "Implemented social media integrations, built dashboards, and analyzed API data for projects.",
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-900 text-white">
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
              <p className="mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
