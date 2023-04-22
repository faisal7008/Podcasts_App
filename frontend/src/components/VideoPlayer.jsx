import React, { useRef, useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const VideoPlayer = ({ src }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const options = {
      controls: ["play", "progress", "current-time", "mute", "volume"],
      fullscreen: { enabled: true },
    };
    const player = new Plyr(playerRef.current, options);

    // return () => {
    //   player.destroy();
    // };
  }, []);

  return (
    <div>
      <video ref={playerRef}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
