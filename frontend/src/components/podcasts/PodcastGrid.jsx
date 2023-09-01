import React, { useEffect, useState } from 'react';
import PodcastCard from './PodcastCard';
import Slider from 'react-slick';
import { emptyLogo } from '../../assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'
import { Navigation, Pagination } from 'swiper/modules';

export default function PodcastGrid({ podcasts }) {
  // Define breakpoints and the corresponding slidesPerView values
  const breakpoints = {
    320: 1, // 1 slide for screen width less than 320px
    640: 2, // 2 slides for screen width less than 640px
    768: 3, // 3 slides for screen width less than 768px
    1024: 4, // 4 slides for screen width less than 1024px
  };

  // Calculate slidesPerView based on the screen width
  const calculateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    for (const breakpoint in breakpoints) {
      if (screenWidth < parseInt(breakpoint)) {
        return breakpoints[breakpoint];
      }
    }
    return 5; // Default value for wider screens
  };

  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());

  // Update slidesPerView when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=' '>
      {podcasts?.length === 0 && (
        <div className='h-80 grid place-content-center'>
          <img src={emptyLogo} className='h-32 animate-pulse' />
        </div>
      )}
      <Swiper
        slidesPerView={slidesPerView} // Use the dynamic slidesPerView value
        spaceBetween={-50}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-max px-3"
        style={{
          "--swiper-navigation-color": "#F4EEE0",
          "--swiper-navigation-size": "16px",
        }}
      >
        {podcasts?.map((podcast) => (
          <SwiperSlide key={podcast._id}><PodcastCard podcast={podcast} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
