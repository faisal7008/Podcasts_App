import React from "react";
import HomeContent from "../../pages/HomeContent";

export default function Main() {
  return (
    <div className=" w-full py-10 h-full scroll-container overflow-auto px-6">
      {/* <VideoPlayer src="https://www.youtube.com/watch?v=AXSm49NGkg8" /> */}
      {/* <VideoPlayer src="video1.mp4" /> */}
      {/* <AudioPlayer src="audio1.mp3" /> */}
      <HomeContent />
    </div>
  );
}
