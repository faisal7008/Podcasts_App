import React from "react";
import SearchBar from "./SearchBar";
import PopularCard from "./PopularCard";

export default function Main() {
  return (
    <div className="container flex flex-col gap-4 mx-auto py-10 h-full md:w-4/5 w-11/12 px-6">
      <div className="grid lg:grid-cols-2">
        <SearchBar />
      </div>
      <h2 className="text-2xl font-semibold text-color-font">Popular</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </div>
  );
}
