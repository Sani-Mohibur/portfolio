import React from "react";

export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Md. Mohibur Rahman Sani</h1>
        <div className="space-x-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 hover:text-blue-500"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(link.href);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
