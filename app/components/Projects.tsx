import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      name: "Issue Tracker",
      link: "https://issue-tracker-gilt-pi.vercel.app",
      description:
        "Developed a sophisticated Issue Tracker application leveraging Next.js, PostgreSQL, and TanStack Query, optimizing issue management with a sleek, responsive UI and real-time data updates. Integrated role-based access control (RBAC) to bolster security, ensuring that only authenticated users can perform Create, Update, and Delete operations, thereby safeguarding data integrity.",
    },
    {
      name: "Bone Abnormality Detection",
      link: "#",
      description:
        "Implemented a deep learning algorithm using Python and TensorFlow to detect bone abnormalities. Executed the project with a CNN of 5 layers, trained from the MURA dataset from Stanford.",
    },
    {
      name: "Expanse",
      link: "#",
      description:
        "Expanse is an online learning platform designed to make education accessible, interactive, and personalized for students worldwide. Inspired by the spirit of exploration, it fosters a collaborative environment where students and instructors can share knowledge through discussion forums, quizzes, and personalized learning paths that adapt to individual progress.",
    },
    {
      name: "Social Media Integration",
      link: "#",
      description:
        "SMI is a tool that can be integrated in any web based platform which will allow user to login with Facebook, Gmail, Discord and Twitter. This is a hassfle free solution that other developers can use to handle authentication flow.",
    },
  ];

  return (
    <section id="projects" className="py-16  text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
