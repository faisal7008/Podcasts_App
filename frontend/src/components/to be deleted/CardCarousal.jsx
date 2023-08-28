import React, { useRef } from 'react';
import PopularCard from '../podcasts/PodcastCard';

const CardCarousel = ({ podcasts }) => {
  const carouselRef = useRef(null);

  //   console.log(podcasts)
  const scrollToNext = () => {
    carouselRef.current.scrollBy({
      left: window.innerWidth,
      behavior: 'smooth',
    });
  };

  const scrollToPrev = () => {
    carouselRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative w-full'>
      <div
        ref={carouselRef}
        className='flex w-full scroll-container overflow-x-auto overflow-y-hidden transition-transform duration-300 gap-4'
      >
        {podcasts?.slice(0, 10)?.map((podcast) => (
          <PopularCard
            key={podcast._id}
            title={podcast.name}
            desc={podcast.description}
            fileUrl={podcast.fileUrl}
            type={podcast.type}
          />
        ))}
      </div>
      <button className='absolute top-1/2 left-0 transform -translate-y-1/2' onClick={scrollToPrev}>
        Previous
      </button>
      <button
        className='absolute top-1/2 right-0 transform -translate-y-1/2'
        onClick={scrollToNext}
      >
        Next
      </button>
    </div>
  );
};

export default CardCarousel;
