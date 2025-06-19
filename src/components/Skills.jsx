import React from "react";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-10">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              Programming Languages
            </h3>
            <ul className="list-disc list-inside">
              <li>Python</li>
              <li>C++</li>
              <li>Java</li>
              <li>C#</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Web Development</h3>
            <ul className="list-disc list-inside">
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Databases</h3>
            <ul className="list-disc list-inside">
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">
              Tools & Version Control
            </h3>
            <ul className="list-disc list-inside">
              <li>Git, GitHub, GitLab</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">APIs & Data</h3>
            <ul className="list-disc list-inside">
              <li>RESTful APIs</li>
              <li>GraphQL</li>
              <li>Pandas, NumPy</li>
              <li>TensorFlow, OpenCV</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
