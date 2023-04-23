import React from "react";
import SearchBar from "./SearchBar";
import PopularCard from "./PopularCard";
import Profile from "./Profile";
import VideoPlayer from "./VideoPlayer";
import "plyr/dist/plyr.css";
import AudioPlayer from "./AudioPlayer";

export default function Main() {
  return (
    <div className="flex flex-col gap-4 w-full py-10 h-full overflow-auto px-6">
      {/* <VideoPlayer src="https://www.youtube.com/watch?v=AXSm49NGkg8" /> */}
      {/* <VideoPlayer src="video1.mp4" /> */}
      <AudioPlayer src="audio1.mp3" />
      <div className="grid lg:grid-cols-2 mb-2">
        <SearchBar />
        <Profile />
      </div>
      <h2 className="text-2xl font-semibold text-color-font">Popular</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-2">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
      <h2 className="text-2xl font-semibold text-color-font">Video Podcasts</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-2">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
      <h2 className="text-2xl font-semibold text-color-font">Audio Podcasts</h2>
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
