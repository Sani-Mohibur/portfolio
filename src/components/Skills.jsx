import React from "react";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      items: ["C++", "Java", "C#", "JavaScript", "TypeScript"],
      color: "border-blue-500",
    },
    {
      category: "Web Stack",
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
      color: "border-teal-500",
    },
    {
      category: "Databases & ORMs",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM", "Mongoose"],
      color: "border-purple-500",
    },
    {
      category: "Tools & Process",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Vite",
        "Agile & Scrum Methodologies",
      ],
      color: "border-orange-500",
    },
  ];

  return (
    <div>
      <section id="skills" className="py-16">
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
          {skillsData.map((skillGroup, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-sm border-t-4 ${skillGroup.color} hover:shadow-md transition-shadow`}
            >
              <h3 className="font-bold text-lg mb-3 text-gray-800">
                {skillGroup.category}
              </h3>

              {/* FIX: 'flex-wrap' moves the entire word group to the next line if it doesn't fit */}
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-gray-600">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="flex items-center">
                    <span>{skill}</span>
                    {/* Add dot inside the group so it stays with the word */}
                    {idx < skillGroup.items.length - 1 && (
                      <span className="ml-2 text-gray-300">•</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
