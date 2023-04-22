import React, { useEffect, useState } from "react";
import logo from "../assets/icons8-podcasts-96.png";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   console.log(isOpen);
  // }, [isOpen]);

  return (
    <div>
      {/* Sidebar starts */}
      <div className="w-64 absolute sm:relative bg-slate-900 shadow md:h-full hidden md:flex flex-col">
        <SidebarContent />
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-10 w-64 bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        id="mobile-nav"
      >
        <button
          className="h-10 w-10 md:hidden bg-slate-900 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
          id="mobile-toggler"
          onClick={() => setIsOpen((flag) => !flag)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-adjustments"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FFFFFF"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={6} cy={10} r={2} />
            <line x1={6} y1={4} x2={6} y2={8} />
            <line x1={6} y1={12} x2={6} y2={20} />
            <circle cx={12} cy={16} r={2} />
            <line x1={12} y1={4} x2={12} y2={14} />
            <line x1={12} y1={18} x2={12} y2={20} />
            <circle cx={18} cy={7} r={2} />
            <line x1={18} y1={4} x2={18} y2={5} />
            <line x1={18} y1={9} x2={18} y2={20} />
          </svg>
        </button>
        <SidebarContent />
      </div>
      {/* Sidebar ends */}
    </div>
  );
}
