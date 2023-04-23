import React from "react";
import { useSelector } from "react-redux";
import PopularCard from "../components/podcasts/PopularCard";

export default function Favourites() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="flex flex-col gap-4 w-full py-10 h-full overflow-auto px-6">
      <h1 className="text-5xl text-color-font font-semibold mb-6">
        Favourites
      </h1>
      <h2 className="text-xl font-semibold text-color-font">Video Podcasts</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-2">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
      <h2 className="text-xl font-semibold text-color-font">Audio Podcasts</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-2">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
    </div>
  );
}
