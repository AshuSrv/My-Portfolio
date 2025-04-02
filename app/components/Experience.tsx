import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Import icons (you'll need to install @react-icons/all-files)
import { FaReact, FaAws, FaPython, FaJava } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTensorflow,
  SiKubernetes,
  SiDocker,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiJavascript,
} from "react-icons/si";

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      company: "Amazon Web Services",
      role: "Software Development Engineer",
      duration: "June 2025 - Present",
      achievements: [
        "Leading development of cloud-native applications using AWS serverless architecture",
        "Implementing real-time data processing solutions with Lambda and Kinesis",
        "Optimizing containerized deployments using ECS and Fargate",
      ],
      tech: [
        <FaAws key="Aws" />,
        <SiKubernetes key="kubernetes" />,
        <SiDocker key="docker" />,
      ],
    },
    {
      company: "HashedIn by Deloitte",
      role: "Software Engineer",
      duration: "Jan 2022 - Aug 2024",
      achievements: [
        "Spearheaded development of 2 hiring tools using ReactJS/Material UI",
        "Achieved 80% reduction in data table render time through optimization",
        "Managed 9+ EPICS and cross-functional team coordination",
        "Mentored junior developers and conducted code reviews",
      ],
      tech: [
        <FaReact key="react" />,
        <SiNextdotjs key="nextJs" />,
        <SiNodedotjs key="nodeJS" />,
        <SiJavascript key="js" />,
      ],
    },
    {
      company: "Standard Chartered GBS",
      role: "Developer - Technology and Innovation",
      duration: "Sept 2020 - Dec 2021",
      achievements: [
        "Developed 18+ real-time workflows using Camunda BPM",
        "Reduced service journey processing time by 30% for African markets",
        "Implemented 11+ features across multiple service journeys",
      ],
      tech: [
        <FaPython key="python" />,
        <SiMysql key="mysql" />,
        <SiPostgresql key="postgresql" />,
        <FaJava key="java" />,
      ],
    },
    {
      company: "Outstrip",
      role: "Associate Software Developer (Intern)",
      duration: "Oct 2019 - Mar 2020",
      achievements: [
        "Implemented social media integration for 5 platforms",
        "Developed project dashboard using ReactJS and E-Charts",
        "Created Facebook authentication system for 2+ projects",
      ],
      tech: [<FaReact key="react" />],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Professional Journey
        </motion.h2>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Glowing Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300"
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1 }}
              />

              <motion.div
                className="p-8 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700 relative cursor-pointer"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                    <p className="text-blue-400 text-lg mb-1">{exp.role}</p>
                    <p className="text-gray-400 text-sm">{exp.duration}</p>
                  </div>
                  <motion.div
                    className="flex space-x-3 text-2xl"
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  >
                    {exp.tech}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-gray-700"
                    >
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-start text-gray-300"
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-blue-400 mr-2">▹</span>
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Animated Tags */}
                      <motion.div
                        className="mt-6 flex flex-wrap gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {exp.tech.map((Icon, idx) => (
                          <motion.span
                            key={idx}
                            className="px-4 py-2 bg-gray-900 rounded-full flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            {Icon}
                            <span className="text-sm">
                              {Icon.type === FaReact && "React"}
                              {Icon.type === SiNextdotjs && "Next.js"}
                              {Icon.type === FaAws && "AWS"}
                              {Icon.type === SiTensorflow && "TensorFlow"}
                            </span>
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
