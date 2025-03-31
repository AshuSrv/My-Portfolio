import { motion } from "framer-motion";
import { JSX } from "react";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

type AchievementType =
  | "tech"
  | "product"
  | "recognition"
  | "professional"
  | "innovation"
  | "leadership"
  | "community"
  | "design";

interface Achievement {
  title: string;
  issuer: string;
  year: string;
  icon: JSX.Element;
  type: AchievementType; // Use the union type here
}

export const Achievements = () => {
  const achievements: Achievement[] = [
    {
      title: "Hackathon Winner",
      issuer: "Arista Network",
      year: "2024",
      icon: <FaTrophy />,
      type: "tech",
    },
    {
      title: "Delivery Excellence",
      issuer: "HashedIn By Deloitte",
      year: "2024",
      icon: <FaAward />,
      type: "leadership",
    },
    {
      title: "Product Expo Winner",
      issuer: "HashedIn University",
      year: "2022",
      icon: <FaMedal />,
      type: "design",
    },
    {
      title: "Rising Star Award",
      issuer: "HashedIn By Deloitte",
      year: "2022",
      icon: <FaAward />,
      type: "recognition",
    },
    {
      title: "Hackathon Winner",
      issuer: "Axess Academy Centre",
      year: "2021",
      icon: <FaTrophy />,
      type: "community",
    },
    {
      title: "Best Graduate Trainee",
      issuer: "Standard Chartered",
      year: "2020",
      icon: <FaAward />,
      type: "professional",
    },
  ];

  const typeColors: Record<AchievementType, string> = {
    tech: "from-purple-500 to-blue-600",
    product: "from-pink-500 to-red-600",
    recognition: "from-green-500 to-teal-600",
    professional: "from-orange-500 to-yellow-600",
    innovation: "from-indigo-500 to-purple-600",
    leadership: "from-rose-500 to-pink-600",
    community: "from-emerald-500 to-cyan-600",
    design: "from-teal-500 to-blue-600",
  };

  return (
    <section
      id="achievements"
      className="py-20 text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Honors & Accolades
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`p-8 rounded-2xl bg-gradient-to-br ${
                  typeColors[achievement.type]
                } relative overflow-hidden transform transition-transform duration-300 `}
              >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

                <div className="relative z-10">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-200 mb-1">{achievement.issuer}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm px-3 py-1 bg-white/10 rounded-full">
                      {achievement.year}
                    </span>
                    <motion.div whileHover={{ scale: 1.2 }} className="text-xl">
                      {achievement.type === "tech" && <FaTrophy />}
                      {achievement.type === "product" && <FaMedal />}
                      {achievement.type === "recognition" && <FaAward />}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
