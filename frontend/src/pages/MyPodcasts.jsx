import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddPodcast from '../components/podcasts/AddPodcast';
import { MicIcon } from '../components/icons';
import { Outlet } from 'react-router-dom';
import PodcastGrid from '../components/podcasts/PodcastGrid';
import { getMyPodcasts } from '../features/podcastSlice';

export default function MyPodcasts() {
  const { myPodcasts } = useSelector((state) => state.podcasts);
  const videoPodcasts = myPodcasts?.filter(
    (podcast) => podcast.type === 'video'
  );
  const audioPodcasts = myPodcasts?.filter(
    (podcast) => podcast.type === 'audio'
  );

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMyPodcasts())
  }, [])

  return (
    <div className='flex flex-col gap-4 w-full p-4 md:p-7 h-full scroll-container overflow-auto'>
      <div className=' flex justify-between items-start'>
        <h2 className='text-lg md:text-2xl tracking-wider font-semibold text-color-font'>
          My Podcasts
        </h2>
        <button
          type='button'
          data-hs-overlay='#add-podcast'
          className='px-4 py-2 w-max font-mono text-sm font-semibold text-color-dark bg-color-font shadow rounded-full flex items-center focus:outline-none gap-2'
        >
          <MicIcon size={17} />
          Add
        </button>
      </div>
      <h2 className='text-base md:text-xl tracking-wider font-semibold text-color-font'>
        Video Podcasts
      </h2>
      <PodcastGrid podcasts={videoPodcasts} />
      <h2 className='text-base md:text-xl tracking-wider font-semibold text-color-font'>
        Audio Podcasts
      </h2>
      <PodcastGrid podcasts={audioPodcasts} />
      <AddPodcast />
      <Outlet />
    </div>
  );
}
