import React from "react";
import { Code, Globe, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      icon: Code,
      items: ["C++", "Java", "C#", "JavaScript", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Web Stack",
      icon: Globe,
      items: [
        "HTML5",
        "CSS3",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "Socket.IO",
      ],
      color: "from-teal-500 to-emerald-500",
    },
    {
      category: "Databases & ORMs",
      icon: Database,
      items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & Process",
      icon: Wrench,
      items: ["Git", "GitHub", "Postman", "Vite", "Agile & Scrum"],
      color: "from-orange-500 to-amber-500",
    },
  ];

  return (
    <section id="skills" className="py-15">
      <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {" "}
        {skillsData.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              className="relative rounded-2xl p-[1px]"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.color} opacity-20 blur-sm`}
              />

              {/* Card Content */}
              <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl shadow-md transition-all duration-300 will-change-transform h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-br ${group.color} text-white`}
                  >
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
