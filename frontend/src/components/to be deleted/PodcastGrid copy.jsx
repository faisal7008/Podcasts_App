import React, { useEffect, useState } from 'react';
import PodcastCard from '../podcasts/PodcastCard';
import Slider from 'react-slick';
import { emptyLogo } from '../../assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function PodcastGrid({ podcasts }) {
  const [sliderKey, setSliderKey] = useState(0); // State to force re-render
  const [autoplay, setAutoplay] = useState(true);
  const settings = {
    dots: false,
    infinite: false,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 5, // Number of cards to show at once
    slidesToScroll: 1,
    swipeToSlide: true,
    // centerPadding: '10px',
    // centerMode: true,
    autoplay,
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

  useEffect(() => {
    setSliderKey(0);
  }, [podcasts]);
  return (
    <>
      {podcasts?.length === 0 && (
        <div className='h-80 grid place-content-center'>
          <img src={emptyLogo} className='h-32 animate-pulse' />
        </div>
      )}
      <Slider
        key={sliderKey} // Use key to trigger re-render
        className='w-full pl-8'
        {...settings}
        onSwipe={() => setAutoplay(false)}
      >
        {podcasts?.map((podcast) => (
          <PodcastCard key={podcast._id} podcast={podcast} />
        ))}
      </Slider>
    </>
  );
}
