import React from "react";
import AudioPlayer from "../components/player/AudioPlayer";
import VideoPlayer from "../components/player/VideoPlayer";

export default function Library() {
  return (
    <div>
      Library
      <AudioPlayer src="audio1.mp3" />
      <VideoPlayer src="video1.mp4" />
    </div>
  );
}
