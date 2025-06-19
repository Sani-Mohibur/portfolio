import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Solar Explorer",
      link: "https://github.com/Sani-Mohibur/Solar-Explorer",
      description:
        "An interactive web-based application that allows users to explore the solar system with scientific facts and stunning visuals.",
      features: [
        "Interactive 3D visualization",
        "Clickable planets and moons",
        "Scientific facts and trivia",
        "Realistic graphics and motion",
      ],
      tech: ["HTML", "CSS"],
    },
    {
      title: "Student Management System",
      link: "https://github.com/Sani-Mohibur/Student-Management-System",
      description:
        "A web application that manages student records with CRUD operations and role-based access control.",
      features: [
        "Add, update, delete, and view student data",
        "Search and filter functionality",
        "Data validation and secure access",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Book Management Project",
      link: "https://github.com/Sani-Mohibur/Book-Management-Project",
      description:
        "A book management system with features to organize and track book records efficiently.",
      features: [
        "Manage book details",
        "Search and filter books",
        "Organize by genre, author, etc.",
      ],
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ];

  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-5">
            <h3 className="text-xl font-bold text-blue-600 mb-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p className="mb-3 text-gray-700">{project.description}</p>
            <ul className="list-disc list-inside text-sm mb-2">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">
              <strong>Technologies:</strong> {project.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
