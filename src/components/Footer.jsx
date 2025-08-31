import { Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { dark, setDark } = useTheme();

  return (
    <footer
      className={
        dark
          ? "bg-gray-900 text-gray-300 py-10 px-6 transition-colors duration-300"
          : "bg-white text-gray-900 py-10 px-6 transition-colors duration-300"
      }
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h2
            className={
              dark
                ? "text-xl font-bold text-white"
                : "text-xl font-bold text-black"
            }
          >
            Mohibur Rahman Sani
          </h2>
          <p className="text-sm mt-2">Full-Stack Developer</p>
        </div>

        {/* Center Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="#about"
            className={dark ? "hover:text-gray-100" : "hover:text-black"}
          >
            About
          </a>
          <a
            href="#skills"
            className={dark ? "hover:text-gray-100" : "hover:text-black"}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={dark ? "hover:text-gray-100" : "hover:text-black"}
          >
            Projects
          </a>
          <a
            href="#resume"
            className={dark ? "hover:text-gray-100" : "hover:text-black"}
          >
            Resume
          </a>
        </div>

        {/* Right Section (Social Links + Theme Toggle) */}
        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4">
            <a
              href="https://github.com/Sani-Mohibur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sani-mohibur/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mohiburrahmansani@gmail.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Theme Toggle Button */}
          <button
            disabled
            onClick={() => setDark(!dark)}
            className={
              dark
                ? "px-3 py-1 rounded-full bg-gray-800 text-white"
                : "px-3 py-1 rounded-full bg-gray-200 text-black"
            }
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={
          dark
            ? "border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400"
            : "border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600"
        }
      >
        © {new Date().getFullYear()} SaniMohibur. All rights reserved.
      </div>
    </footer>
  );
}
