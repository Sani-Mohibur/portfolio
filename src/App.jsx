import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto p-4">
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
