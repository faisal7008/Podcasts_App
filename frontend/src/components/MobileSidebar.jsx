import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function MobileSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleSidebarToggle() {
    setIsSidebarOpen(prevState => !prevState);
  }

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between bg-gray-800 py-4 px-6">
        <h1 className="text-white text-xl font-bold">My Website</h1>
        <button
          className="text-white hover:text-gray-300 focus:outline-none"
          onClick={handleSidebarToggle}
        >
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-gray-900 fixed top-0 left-0 h-full w-64 z-50 transition-transform ease-in-out duration-300`}
      >
        <nav className="mt-6">
          <a
            href="#"
            className="block py-2 px-4 text-white hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:bg-gray-700"
          >
            Services
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-white hover:bg-gray-700"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default MobileSidebar;
