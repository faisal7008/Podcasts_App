import React, { useEffect, useState } from "react";
import SearchBar from "../components/search/SearchBar";
import PodcastCard from "../components/podcasts/PodcastCard";
import Profile from "../components/profile/Profile";
import VideoPlayer from "../components/player/VideoPlayer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPodcasts } from "../features/podcastSlice";
import AudioPlayer from "../components/player/AudioPlayer";
import CardCarousel from "../components/podcasts/CardCarousal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default function HomeContent() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { podcasts } = useSelector((state) => state.podcasts);

  const popularPodcasts = podcasts?.slice(0, 10)
  const videoPodcasts = podcasts?.filter((pod) => pod.type === "video")
  const audioPodcasts = podcasts?.filter((pod) => pod.type === "audio")
  // const [allPodcasts, setAllPodcasts] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5, // Number of cards to show at once
    slidesToScroll: 1,
    // centerPadding: "20px",
    // centerMode: true,
    draggable: true,
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-4 w-full py-8 h-full scroll-container overflow-y-auto pl-6 pr-10">
      <div className="flex justify-between items-center">
      <h2 className="text-base md:text-xl tracking-wider font-semibold text-color-font">Popular</h2>
      <Link
        to='/popular' state={{podcastData: popularPodcasts, title: 'Popular'}}
        type="button"
        className="px-3 py-1 font-semibold text-color-font hover:text-stone-200 transition-all text-xs sm:text-sm"
      >
        View all
      </Link>
      </div>
      <Slider className="w-full pl-8" {...settings}>
        {popularPodcasts?.map((podcast) => (
          <PodcastCard
            key={podcast._id}
            title={podcast.name}
            desc={podcast.description}
            fileUrl={podcast.fileUrl}
            type={podcast.type}
          />
        ))}
      </Slider>
      <div className="flex justify-between items-center">
      <h2 className="texl-2xl md:text-xl font-semibold text-color-font">Video Podcasts</h2>
      <Link
        to='/videocasts' state= {{podcastData: videoPodcasts, title: 'Video Podcasts'}}
        type="button"
        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-color-font hover:text-stone-200 focus:outline-none transition-all text-xs sm:text-sm"
      >
        View all
      </Link>
      </div>
      <Slider className="w-full pl-8 " {...settings}>
        {videoPodcasts
          ?.map((podcast) => (
            <PodcastCard
              key={podcast._id}
              title={podcast.name}
              desc={podcast.description}
              fileUrl={podcast.fileUrl}
              type={podcast.type}
            />
          ))}
      </Slider>
      <div className="flex justify-between items-center">
      <h2 className="texl-2xl md:text-xl font-semibold text-color-font">Audio Podcasts</h2>
      <Link
        to='/audiocasts' state= {{podcastData: audioPodcasts, title: 'Audio Podcasts'}}
        type="button"
        class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-color-font hover:text-stone-200 focus:outline-none transition-all text-xs sm:text-sm"
      >
        View all
      </Link>
      </div>
      <Slider className="w-full pl-8 " {...settings}>
        {audioPodcasts
          ?.map((podcast) => (
            <PodcastCard
              key={podcast._id}
              title={podcast.name}
              desc={podcast.description}
              fileUrl={podcast.fileUrl}
              type={podcast.type}
            />
          ))}
      </Slider>
      {/* {path && <AudioPlayer src={path} />} */}
    </div>
  );
}
