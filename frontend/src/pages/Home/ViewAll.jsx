import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PodcastCard from '../../components/podcasts/PodcastCard';
import { BackIcon } from '../../components/icons';
import { emptyLogo } from '../../assets';
import GoBack from '../../components/handlers/GoBack';

export default function ViewAll() {
  const navigate = useNavigate();
  const location = useLocation();
  const { podcastData, title } = location.state;
  // console.log(podcastData);
  return (
    <div className='flex flex-col gap-4 w-full p-4 md:p-7 h-full scroll-container overflow-auto'>
      <div className='flex gap-3 items-center'>
        <GoBack/>
        <h2 className='text-lg sm:text-xl tracking-wider font-semibold text-color-font'>{title}</h2>
      </div>
      <div className=' inline-flex px-5 py-2 flex-wrap gap-3 sm:gap-8 mb-2'>
        {podcastData?.map((podcast) => (
          <PodcastCard key={podcast._id} podcast={podcast} />
        ))}
      </div>
      {podcastData?.length === 0 && (
        <div className='h-full w-full flex justify-center items-center'>
          <img src={emptyLogo} className='h-60' />
        </div>
      )}
    </div>
  );
}
