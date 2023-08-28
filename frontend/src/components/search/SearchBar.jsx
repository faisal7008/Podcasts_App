import React from "react";
import { CloseIcon, SearchIcon } from "../icons";

export default function SearchBar({searchItem, setSearchItem}) {
  return (
    <div>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <SearchIcon color="#393646" size={22}/>
        </div>
        <input
          type="text"
          id="default-search"
          className="block w-full p-3 pl-12 pr-10 text-sm font-medium text-gray-900 border-none rounded-full bg-gray-50"
          placeholder="Search Podcasts, Artists"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          required
        />
       {searchItem && <button onClick={() => setSearchItem("")} type="button" className=" absolute inset-y-0 right-0 mr-3 focus:outline-none"><CloseIcon color="#393646" size={20}/></button>}
      </div>
    </div>
  );
}
