import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Mental Health Tracker",
      github: "https://github.com/Sani-Mohibur/mental-health-tracker",
      live: "https://mental-health-tracker-two.vercel.app/",
      image: "mental.png",
      description:
        "A responsive mental wellness platform for tracking moods, journaling thoughts, and practicing guided self-care.",
      tech: ["React", "Tailwind", "Vite", "React Router"],
    },
    {
      title: "HireMe API",
      github: "https://github.com/Sani-Mohibur/hireme-api",
      live: "",
      image: "hireme.png",
      description:
        "Scalable backend for a job portal supporting recruiters and job seekers with secure workflows.",
      tech: ["TypeScript", "Express", "MongoDB", "Zod"],
    },
    {
      title: "Real-Time Chat App",
      github: "https://github.com/Sani-Mohibur/chat-backend",
      live: "",
      image: "chat.png",
      description:
        "Real-time chat system with instant messaging and synchronization across clients.",
      tech: ["Node.js", "Socket.IO", "Express"],
    },
    {
      title: "Ecommerce API",
      github: "https://github.com/Sani-Mohibur/chat-backend",
      live: "",
      image: "ecommerce.png",
      description:
        "REST API for ecommerce platform handling products, carts, and authentication.",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transform transition duration-500 ease-out group-hover:scale-110"
            />

            {/* Base Gradient (always visible) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Always visible title */}
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-lg font-semibold">{project.title}</h3>
            </div>

            {/* Hover / Expanded Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-black/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300 text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-sm mb-3">{project.description}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/20 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm hover:underline"
                >
                  <Github size={16} />
                  Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
