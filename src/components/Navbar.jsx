import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">Mohibur Rahman Sani</h1>
          <div>
            <a href="#about" className="px-3 hover:text-blue-500">
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
