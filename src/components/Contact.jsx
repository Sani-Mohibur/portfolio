import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <p className="mb-4 text-gray-700 max-w-xl">
        Feel free to reach out to me via email or connect on LinkedIn and
        GitHub.
      </p>
      <ul className="text-gray-700 space-y-2">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:mohiburrahmansani@gmail.com"
            className="text-blue-600 hover:underline"
          >
            mohiburrahmansani@gmail.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +8801770553675
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/Mohibur-Rahman-Sani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Mohibur-Rahman-Sani
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/Sani-Mohibur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Sani-Mohibur
          </a>
        </li>
      </ul>
    </section>
  );
}
