import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import PodcastGrid from '../../components/podcasts/PodcastGrid';
import './slider.css';

export default function HomeContent() {
  const { podcasts } = useSelector((state) => state.podcasts);

  const popularPodcasts = podcasts?.slice(0, 10);
  const audioPodcasts = podcasts?.filter((pod) => pod.type === 'audio');
  const videoPodcasts = podcasts?.filter((pod) => pod.type === 'video');

  return (
    <div className='flex flex-col gap-4 w-full p-4 md:p-7 min-h-full scroll-container overflow-y-auto'>
      <div className='flex justify-between items-center'>
        <h2 className='text-base md:text-xl tracking-wider font-semibold text-color-font'>
          Popular
        </h2>
        <Link
          to='/popular'
          state={{ podcastData: popularPodcasts, title: 'Popular' }}
          type='button'
          className='py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-color-font hover:text-stone-200 outline-none focus:outline-none transition-all text-xs sm:text-sm'
        >
          View all
        </Link>
      </div>
      <PodcastGrid podcasts={popularPodcasts} />
      <div className='flex justify-between items-center'>
        <h2 className='texl-2xl md:text-xl font-semibold text-color-font'>Video Podcasts</h2>
        <Link
          to='/videocasts'
          state={{ podcastData: podcasts, title: 'Video Podcasts' }}
          type='button'
          className='py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-color-font hover:text-stone-200 outline-none focus:outline-none transition-all text-xs sm:text-sm'
        >
          View all
        </Link>
      </div>
      <PodcastGrid podcasts={videoPodcasts} />
      <div className='flex justify-between items-center'>
        <h2 className='texl-2xl md:text-xl font-semibold text-color-font'>Audio Podcasts</h2>
        <Link
          to='/audiocasts'
          state={{ podcastData: podcasts, title: 'Audio Podcasts' }}
          type='button'
          className='py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold text-color-font hover:text-stone-200 focus:outline-none outline-none transition-all text-xs sm:text-sm'
        >
          View all
        </Link>
      </div>
      <PodcastGrid podcasts={audioPodcasts} />
    </div>
  );
}
