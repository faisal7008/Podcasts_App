import React from "react";
import { useSelector } from "react-redux";
import PopularCard from "../components/podcasts/PodcastCard";
import AddPodcast from "../components/podcasts/AddPodcast";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PodcastCard from "../components/podcasts/PodcastCard";

export default function MyPodcasts() {
  const { user } = useSelector((state) => state.auth);
  const { podcasts } = useSelector((state) => state.podcasts);
  const videoPodcasts = podcasts?.filter((podcast) => podcast.type === "video" && podcast.addedBy === user?._id);
  const audioPodcasts = podcasts?.filter((podcast) => podcast.type === "audio" && podcast.addedBy === user?._id);

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
    <div className="flex flex-col gap-4 w-full py-8 h-full scroll-container overflow-auto px-6">
      <div className=" flex justify-between items-start">
      <h2 className="text-lg md:text-2xl tracking-wider font-semibold text-color-font">My Podcasts</h2>
        <button
          type="button"
          data-hs-overlay="#add-podcast"
          className="px-4 py-2 w-max font-mono text-sm font-semibold text-color-dark bg-color-font shadow rounded-full flex items-center focus:outline-none gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4"
          >
            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
            <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
          </svg>
          Add
        </button>
      </div>
      <h2 className="text-base md:text-xl tracking-wider font-semibold text-color-font">Video Podcasts</h2>
      <Slider className="w-full pl-8" {...settings}>
      {videoPodcasts?.map((podcast) => (
          <PodcastCard
          key={podcast._id}
          podcast={podcast}
        />
        ))}
     </Slider>
     <h2 className="text-base md:text-xl tracking-wider font-semibold text-color-font">Audio Podcasts</h2>
      <Slider className="w-full pl-8" {...settings}>
      {audioPodcasts?.map((podcast) => (
          <PodcastCard
          key={podcast._id}
          podcast={podcast}
        />
        ))}
     </Slider>
      <AddPodcast />
    </div>
  );
}
