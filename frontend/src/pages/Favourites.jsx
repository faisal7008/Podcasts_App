import React from "react";
import { useSelector } from "react-redux";
import AddPodcast from "../components/podcasts/AddPodcast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PodcastCard from "../components/podcasts/PodcastCard";
import { emptyLogo } from "../assets";
import PodcastGrid from "../components/podcasts/PodcastGrid";

export default function MyPodcasts() {
  const { profile } = useSelector((state) => state.auth);
  const { podcasts } = useSelector((state) => state.podcasts);
  const videoPodcasts = podcasts?.filter(
    (podcast) =>
      podcast.type === "video" &&
      profile?.favoritePodcasts?.includes(podcast._id)
  );
  const audioPodcasts = podcasts?.filter(
    (podcast) =>
      podcast.type === "audio" &&
      profile?.favoritePodcasts?.includes(podcast._id)
  );

  return (
    <div className="flex flex-col gap-4 w-full p-4 md:p-7 h-full scroll-container overflow-auto">
      <div className=" flex justify-between items-start mb-1">
        <h2 className="text-lg md:text-2xl tracking-wider font-semibold text-color-font">
          {" "}
          Favourites
        </h2>
      </div>
      <h2 className="text-base md:text-xl tracking-wider font-semibold text-color-font">
        Video Podcasts
      </h2>
      <PodcastGrid podcasts={videoPodcasts} />
      <h2 className="text-base md:text-xl tracking-wider font-semibold text-color-font">
        Audio Podcasts
      </h2>
      <PodcastGrid podcasts={audioPodcasts} />
      <AddPodcast />
    </div>
  );
}
