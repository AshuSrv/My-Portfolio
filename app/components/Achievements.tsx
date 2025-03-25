import { motion } from "framer-motion";

export const Achievements = () => {
  const achievements = [
    "Best Graduate Trainee - Standard Chartered Bank (2020)",
    "Hackathon Winner - Axess Academy Centre (2021)",
    "Product Expo Winner - HashedIn University Edge Program (2022)",
    "Rising Star - HashedIn (2022)",
    "Hackathon Winner - Arista Network Hackathon (2024)",
  ];

  return (
    <section id="achievements" className="py-16  text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Achievements
        </motion.h2>
        <div className="flex flex-col items-center space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 px-6 py-3 rounded-lg shadow-lg text-lg w-3/4 text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {achievement}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
