import React, { useRef, useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const AudioPlayer = ({ src }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const options = {
      controls: ["play", "progress", "current-time", "mute", "volume"],
      colors: {
        controls: "#4F4557",
        // This is the color of the progress bar
        // This example uses red (#ff0000)
        progress: "#4F4557",
      },
      class: {
        video: "w-full",
        audio: "w-full",
        controls: "flex flex-wrap items-center justify-between",
        play: "inline-flex items-center justify-center w-10 h-10 rounded-full border border-white hover:bg-white hover:text-black",
        progress: "w-full",
        volume:
          "inline-flex items-center justify-center w-10 h-10 rounded-full border border-white hover:bg-white hover:text-black",
      },
    };
    const player = new Plyr(playerRef.current, options);
    console.log(player.currentTime);
    // return () => {
    //   player.destroy();
    // };
  }, []);

  return (
    <div className="w-full fixed bottom-0 rounded-t-lg shadow-t-lg">
      <audio ref={playerRef}>
        <source src={src} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
