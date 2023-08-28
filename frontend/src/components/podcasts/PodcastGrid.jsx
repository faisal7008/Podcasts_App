import React from "react";
import PodcastCard from "./PodcastCard";
import Slider from "react-slick";
import { emptyLogo } from "../../assets";

export default function PodcastGrid({ podcasts }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of cards to show at once
    slidesToScroll: 1,
    // centerPadding: '10px',
    // centerMode: true,
    autoplay: true,
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
    <>
      {podcasts?.length === 0 && (
        <div className="h-80 grid place-content-center">
          <img src={emptyLogo} className="h-32" />
        </div>
      )}
      <Slider className="w-full pl-8" {...settings}>
        {podcasts?.map((podcast) => (
          <PodcastCard key={podcast._id} podcast={podcast} />
        ))}
      </Slider>
    </>
  );
}
