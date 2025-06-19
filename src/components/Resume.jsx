import React from "react";
import resumePDF from "../assets/Mohibur_Rahman_Sani_Resume.pdf"; // Put your CV PDF in assets folder

export default function Resume() {
  return (
    <section id="resume" className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Resume</h2>
      <p className="mb-4 text-gray-700 max-w-xl">
        You can download my complete resume to know more about my qualifications
        and experience.
      </p>
      <a
        href={resumePDF}
        download="Md_Mohibur_Rahman_Sani_Resume.pdf"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
