import { motion } from "framer-motion";
import { ReactNode } from "react";
import { FaReact, FaAws, FaDocker, FaDownload } from "react-icons/fa";
import {
  SiNextdotjs,
  SiStorybook,
  SiTailwindcss,
  SiKubernetes,
  SiOctopusdeploy,
  SiJenkins,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

type SkillItem = {
  name: string;
  icon?: ReactNode;
};

export const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <TbBrandJavascript /> },
        { name: "Storybook", icon: <SiStorybook /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ] as SkillItem[],
    },
    {
      name: "Backend",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Spring Boot" },
      ] as SkillItem[],
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "AWS", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "CI/CD", icon: <SiOctopusdeploy /> },
        { name: "Jenkins", icon: <SiJenkins /> },
      ] as SkillItem[],
    },
    {
      name: "Specializations",
      skills: [
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "Distributed Systems" },
        { name: "Data Science" },
        { name: "Gen AI" },
      ] as SkillItem[],
    },
  ];

  const handleDownloadCV = () => {
    // Replace with your actual CV path in public folder
    window.open("/cv-ashutosh-shrivastava.pdf", "_blank");
  };

  return (
    <section id="skills" className="py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/80 backdrop-blur-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {category.name}
                </h3>

                <div className="grid gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors"
                    >
                      {skill.icon && (
                        <span className="text-2xl text-blue-400">
                          {skill.icon}
                        </span>
                      )}
                      <span className="text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CV Download Button */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full font-semibold flex items-center gap-3 group relative overflow-hidden"
          >
            <span>Download CV</span>
            <motion.span
            // animate={{
            //   y: [0, 5, 0],
            // }}
            // transition={{
            //   duration: 1.5,
            //   repeat: Infinity,
            // }}
            >
              <FaDownload className="text-xl" />
            </motion.span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full opacity-0 " />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
