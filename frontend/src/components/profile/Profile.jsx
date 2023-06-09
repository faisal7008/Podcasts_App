import React from "react";
import { logout } from "../../features/userSlice";

export default function Profile() {
  return (
    <div className=" place-self-end self-center">
      <button
        type="button"
        onClick={() => logout()}
        className=" px-3 py-2 bg-slate-900 flex text-color-font rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-color-font"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <span className="ml-2"> username</span>
      </button>
    </div>
  );
}
