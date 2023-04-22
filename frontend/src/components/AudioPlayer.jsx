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
    };
    const player = new Plyr(playerRef.current, options);

    // return () => {
    //   player.destroy();
    // };
  }, []);

  return (
    <div>
      <audio ref={playerRef}>
        <source src={src} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default AudioPlayer;
