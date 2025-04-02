import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      name: "Issue Tracker",
      link: "https://issue-tracker-gilt-pi.vercel.app",
      description:
        "Developed a sophisticated Issue Tracker application leveraging Next.js, PostgreSQL, and TanStack Query, optimizing issue management with a sleek, responsive UI and real-time data updates. Integrated role-based access control (RBAC) to bolster security, ensuring that only authenticated users can perform CRUD operations, thereby safeguarding data integrity.",
    },
    {
      name: "Bone Abnormality Detection",
      link: "https://github.com/AshuSrv",
      description:
        "Implemented a deep learning algorithm using Python and TensorFlow to detect bone abnormalities. Executed the project with a CNN of 5 layers, trained from the MURA dataset from Stanford.",
    },
    {
      name: "Expanse",
      link: "https://github.com/AshuSrv",
      description:
        "Expanse is an online learning platform designed to make education accessible, interactive, and personalized for students worldwide. Tt fosters a collaborative environment where students and instructors can share knowledge through discussion forums, quizzes, and personalized learning paths that adapt to individual progress.",
    },
    {
      name: "Social Media Integration",
      link: "https://github.com/AshuSrv",
      description:
        "SMI is a tool that can be integrated in any web based platform which will allow user to login with Facebook, Gmail, Discord and Twitter. This is a hassfle free solution that other developers can use to handle authentication flow.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-gray-700 overflow-hidden">
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
                </div>

                {/* Project Description */}
                <motion.p className="text-gray-300 leading-relaxed mb-6 flex-1 min-h-[120px]">
                  {project.description}
                </motion.p>

                {/* Project Link */}
                {project.link !== "#" && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 "
                  >
                    <span className="flex items-center gap-2">
                      <span>View Project</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </span>
                  </motion.a>
                )}

                {/* Tech Stack Tags */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {getTechTags(project.name).map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-gray-900 rounded-full text-sm border border-blue-400/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to show tech tags based on project
const getTechTags = (projectName: string) => {
  switch (projectName) {
    case "Issue Tracker":
      return ["Next.js", "PostgreSQL", "TanStack Query", "TypeScript"];
    case "Bone Abnormality Detection":
      return ["Python", "TensorFlow", "CNN", "Deep Learning"];
    case "Expanse":
      return ["React", "Node.js", "MongoDB", "Tailwind"];
    case "Social Media Integration":
      return ["OAuth", "React", "Firebase", "REST API"];
    default:
      return [];
  }
};
