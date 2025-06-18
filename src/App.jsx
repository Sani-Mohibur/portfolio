import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="max-w-5xl mx-auto p-4">
        <About />
      </main>
    </div>
  );
}

export default App;
