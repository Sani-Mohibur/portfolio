import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { dark, setDark } = useTheme();

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-[#0d1117] shadow sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold dark:text-white">
          Mohibur Rahman Sani
        </h1>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
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

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {dark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
