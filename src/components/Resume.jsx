import React from "react";
import resumePDF from "../assets/Mohibur_Rahman_Sani_Resume_v2.pdf";

export default function Resume() {
  return (
    <section id="resume" className="py-16">
      <h2 className="text-3xl font-semibold mb-8">Resume</h2>
      <p className="mb-4 text-gray-700 max-w-xl">
        You can download my complete resume to know more about my qualifications
        and experience.
      </p>
      <a
        href={resumePDF}
        download="Md_Mohibur_Rahman_Sani_Resume.pdf"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded 
        hover:bg-blue-700 transition-colors duration-200 focus:outline-none 
        focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Download Resume
      </a>
    </section>
  );
}
