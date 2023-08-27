import React from "react";
import { useSelector } from "react-redux";
import PopularCard from "../components/podcasts/PodcastCard";
import AddPodcast from "../components/podcasts/AddPodcast";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PodcastCard from "../components/podcasts/PodcastCard";
import { MicIcon } from "../components/icons";
import { Outlet } from "react-router-dom";

export default function MyPodcasts() {
  const { user } = useSelector((state) => state.auth);
  const { podcasts } = useSelector((state) => state.podcasts);
  const videoPodcasts = podcasts?.filter(
    (podcast) => podcast.type === "video" && podcast.addedBy === user?._id
  );
  const audioPodcasts = podcasts?.filter(
    (podcast) => podcast.type === "audio" && podcast.addedBy === user?._id
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Number of cards to show at once
    slidesToScroll: 1,
    // centerPadding: '10px',
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4 w-full p-4 md:p-8 h-full scroll-container overflow-auto">
      <div className=" flex justify-between items-start">
        <h2 className="text-lg md:text-2xl tracking-wider font-semibold text-color-font">
          My Podcasts
        </h2>
        <button
          type="button"
          data-hs-overlay="#add-podcast"
          className="px-4 py-2 w-max font-mono text-sm font-semibold text-color-dark bg-color-font shadow rounded-full flex items-center focus:outline-none gap-2"
        >
          <MicIcon size={17} />
          Add
        </button>
      </div>
      <h2 className="text-base md:text-xl tracking-wider font-semibold text-color-font">
        Video Podcasts
      </h2>
      <Slider className="w-full pl-8" {...settings}>
        {videoPodcasts?.map((podcast) => (
          <PodcastCard key={podcast._id} podcast={podcast} />
        ))}
      </Slider>
      <h2 className="text-base md:text-xl tracking-wider font-semibold text-color-font">
        Audio Podcasts
      </h2>
      <Slider className="w-full pl-8" {...settings}>
        {audioPodcasts?.map((podcast) => (
          <PodcastCard key={podcast._id} podcast={podcast} />
        ))}
      </Slider>
      <AddPodcast />
      <Outlet/>
    </div>
  );
}
