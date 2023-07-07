import React, { useEffect, useState } from "react";
// import logo from "../assets/icons8-podcasts-96.png";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   console.log(isOpen);
  // }, [isOpen]);

  return (
    <div>
      {/* Sidebar starts */}
      <div className="w-52 md:w-64 absolute sm:relative bg-slate-900 shadow lg:h-full hidden lg:flex flex-col">
        <SidebarContent />
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-10 w-52 md:w-64 bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        id="mobile-nav"
      >
        <button
          className="h-8 w-6 lg:hidden bg-slate-900 absolute right-0 px-1 mt-16 -mr-5 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
          id="mobile-toggler"
          onClick={() => setIsOpen((flag) => !flag)}
        >
          <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className={`w-6 h-6 ${isOpen && 'rotate-180'}`}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
            </svg>
        </button>
        <SidebarContent />
      </div>
      {/* Sidebar ends */}
    </div>
  );
}
