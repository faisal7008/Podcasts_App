import React from "react";

export default function SearchBar({searchItem, setSearchItem}) {
  return (
    <form>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-color-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 pl-12 text-sm font-medium text-gray-900 border-none rounded-full bg-gray-50"
          placeholder="Search Podcasts, Artists"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          required
        />
      </div>
    </form>
  );
}
