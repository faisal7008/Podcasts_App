import React, { useEffect, useState } from "react";
import SearchBar from "../components/search/SearchBar";
import PopularCard from "../components/podcasts/PopularCard";
import Profile from "../components/profile/Profile";
import VideoPlayer from "../components/player/VideoPlayer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPodcasts } from "../features/podcastSlice";
import AudioPlayer from "../components/player/AudioPlayer";

export default function HomeContent() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { podcasts } = useSelector((state) => state.podcasts);
  // const [allPodcasts, setAllPodcasts] = useState(null);
  useEffect(() => {
    dispatch(getAllPodcasts());
    // setAllPodcasts(podcasts);
  }, []);
  return (
    <div className="flex flex-col gap-4 w-full py-8 h-full overflow-auto px-6">
      <h2 className="text-2xl font-semibold text-color-font">Popular</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-2">
        {podcasts?.map((podcast) => (
          <PopularCard
            key={podcast._id}
            title={podcast.name}
            desc={podcast.description}
            fileUrl={podcast.fileUrl}
            type={podcast.type}
          />
        ))}
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
      {/* {path && <AudioPlayer src={path} />} */}
    </div>
  );
}