import React from "react";
import SearchCard from "./SearchCard";

export default function SearchContent() {
  return (
    <div className=" overflow-auto mt-5">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-2">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>
    </div>
  );
}
