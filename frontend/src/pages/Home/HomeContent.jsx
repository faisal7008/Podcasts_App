import React, { useEffect, useState } from "react";
import PodcastCard from "../../components/podcasts/PodcastCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default function HomeContent() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { podcasts } = useSelector((state) => state.podcasts);

  const popularPodcasts = podcasts?.slice(0, 10)
  const audioPodcasts = podcasts?.filter((pod) => pod.type === "audio")
  const videoPodcasts = podcasts?.filter((pod) => pod.type === "video")
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
    <div className="flex flex-col gap-4 w-full p-4 md:p-8 min-h-full scroll-container overflow-y-auto">
      <div className="flex justify-between items-center">
      <h2 className="text-base md:text-xl tracking-wider font-semibold text-color-font">Popular</h2>
      <Link
        to='/popular' state={{podcastData: popularPodcasts, title: 'Popular'}}
        type="button"
        className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-color-font hover:text-stone-200 focus:outline-none transition-all text-xs sm:text-sm"
      >
        View all
      </Link>
      </div>
      <Slider className="w-full pl-8" {...settings}>
        {popularPodcasts?.map((podcast) => (
          <PodcastCard
            key={podcast._id}
            podcast={podcast}
          />
        ))}
      </Slider>
      {/* <div className=" flex gap-6 min-h-48 sm:min-h-[17rem] snap-x snap-mandatory overflow-x-scroll scroll-smooth">
        {popularPodcasts?.map((podcast) => (
          <div className=" snap-always snap-start" key={podcast._id}>
          <PodcastCard
            podcast={podcast}
          />
          </div>
        ))}
      </div> */}
      <div className="flex justify-between items-center">
      <h2 className="texl-2xl md:text-xl font-semibold text-color-font">Video Podcasts</h2>
      <Link
        to='/videocasts' state= {{podcastData: podcasts, title: 'Video Podcasts'}}
        type="button"
        className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-color-font hover:text-stone-200 focus:outline-none transition-all text-xs sm:text-sm"
      >
        View all
      </Link>
      </div>
      <Slider className="w-full pl-8 " {...settings}>
        {videoPodcasts
          ?.map((podcast) => (
            <PodcastCard
              key={podcast._id}
              podcast={podcast}
            />
          ))}
      </Slider>
      <div className="flex justify-between items-center">
      <h2 className="texl-2xl md:text-xl font-semibold text-color-font">Audio Podcasts</h2>
      <Link
        to='/audiocasts' state= {{podcastData: podcasts, title: 'Audio Podcasts'}}
        type="button"
        className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-color-font hover:text-stone-200 focus:outline-none transition-all text-xs sm:text-sm"
      >
        View all
      </Link>
      </div>
      <Slider className="w-full pl-8 " {...settings}>
        {audioPodcasts
          ?.map((podcast) => (
            <PodcastCard
              key={podcast._id}
              podcast={podcast}
            />
          ))}
      </Slider>
      {/* {path && <AudioPlayer src={path} />} */}
      {/* {podcast?.fileUrl && <><br /><br /><br /><br /></>} */}
      {/* <br />
      <br />
      <br /> */}
    </div>
  );
}
