import React, { useEffect, useState } from 'react';
import { podcastCardImg, userImg } from '../../assets';
import NetPlayer from 'netplayer';
import { useDispatch, useSelector } from 'react-redux';
import { savePodcast, setHidePlayer } from '../../features/podcastSlice';
import EpisodeCard from '../episodes/EpisodeCard';
import { BackIcon, PlayIcon, SaveIcon } from '../icons';
import { getAllEpisodes, resetEpisode } from '../../features/episodeSlice';
import StopIcon from '../icons/StopIcon';
import { useNavigate } from 'react-router-dom';

export default function PlayVideo({ hide }) {
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.auth);
  const { videoPodcast } = useSelector((state) => state.podcasts);
  const { episodes, episode } = useSelector((state) => state.episodes);
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(
    profile?.favoritePodcasts?.includes(videoPodcast._id),
  );

  useEffect(() => {
    setIsFavourite(profile?.favoritePodcasts?.includes(videoPodcast._id));
  }, [profile]);

  const handleSave = () => {
    if(!profile){
      navigate('/login')
      return
    }
    dispatch(savePodcast(videoPodcast._id));
    setIsFavourite((prev) => !prev);
  };

  return !hide ? (
    <div
      className={
        'fixed lg:w-5/6 w-full lg:left-64 z-50 bg-color-dark p-4 sm:p-7 h-full scroll-container overflow-y-auto transition-all duration-700'
      }
    >
      <div className='flex gap-3 items-center'>
        <div
          onClick={() => dispatch(setHidePlayer(true))}
          className='p-1.5 cursor-pointer rounded-full hover:bg-color-card'
        >
          <BackIcon size={18} />
        </div>
        <h2 className='text-lg sm:text-xl tracking-wider font-semibold text-color-font'>
          Video Player
        </h2>
      </div>
      <div className='flex flex-col lg:flex-row w-full min-h-full py-4 gap-4'>
        <div className='grid space-y-3 lg:w-4/6 p-5 bg-color-bg rounded-xl'>
          <div className='flex-1'>
            <NetPlayer
              // style={{ maxHeight: "500px" }}
              sources={[
                {
                  file: `${episode?.mediaUrl}`,
                  label: '1080p',
                },
              ]}
              autoPlay
            />
          </div>
          <div className='flex justify-between'>
            <h2 className='text-lg font-medium text-color-font'>
              {episode.title} <span className=' text-2xl mx-1 font-light'> | </span>{' '}
              {videoPodcast.name}
            </h2>
          </div>
          <div className='flex justify-between items-start'>
            <div className='flex gap-3'>
              <div className='flex-shrink-0'>
                <img className='w-10 h-10 rounded-full' src={userImg} alt='Neil image' />
              </div>
              <div className='flex flex-col justify-center'>
                <p className='text-sm font-semibold inline-flex items-center text-color-font truncate'>
                  {videoPodcast?.speaker}{' '}
                  {/* <span className="ml-2 text-xs font-medium font-mono text-gray-200">
                  120M subscribers
                </span> */}
                </p>
                <p className='text-xs font-light text-gray-200 truncate'>120M subscribers</p>
              </div>
            </div>
            <div
              onClick={handleSave}
              className='inline-flex items-center gap-2 font-medium px-4 py-2 rounded-full text-sm bg-color-font text-color-bg outline-none border-none transition-opacity duration-200 ease-linear cursor-pointer'
            >
              <SaveIcon size={18} fill={isFavourite && 'currentColor'} />
              {isFavourite ? 'saved' : 'save'}
            </div>
          </div>
          <div className='w-full rounded-xl px-4 py-3 bg-color-card/100 '>
            <p className='text-sm font-medium'> {episode?.title} </p>
            <p className='text-sm'> {episode?.description} </p>
            <p className='text-sm mt-2'> {videoPodcast?.description} </p>
          </div>
        </div>
        <div className='lg:w-2/6 h-full p-5 flex flex-col gap-3 bg-color-card rounded-xl'>
          <h2 className=' text-sm md:text-base font-semibold text-color-font'>Episodes</h2>
          <div className='flex flex-col overflow-auto min-h-full gap-2'>
            {episodes?.map((episode) => (
              <EpisodeCard key={episode._id} episode={episode} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className='fixed bottom-0 lg:right-0 z-40 lg:mb-5 lg:mr-5 p-5 bg-slate-900 shadow-xl w-full lg:w-1/3 rounded-t-2xl lg:rounded-2xl transition-all duration-700'>
      <div className='relative cursor-pointer'>
        <div className='flex items-center space-x-4'>
          <div>
            <img src={podcastCardImg} className='w-10 shadow rounded' loading='lazy' alt='' />
          </div>
          <div className='flex-1 space-y-1 min-w-0'>
            <p className='text-sm font-medium text-color-font truncate'>{videoPodcast.name}</p>
            <p className='text-xs text-gray-50 truncate'>{videoPodcast.speaker}</p>
          </div>

          <div className='inline-flex gap-3'>
            <button
              onClick={() => dispatch(setHidePlayer(false))}
              type='button'
              className='p-2.5 cursor-pointer rounded-full bg-color-card text-color-font hover:bg-color-dark focus:outline-none shadow transition-all duration-200'
            >
              <PlayIcon size={22} />
            </button>
            <button
              onClick={() => dispatch(resetEpisode())}
              type='button'
              className='p-2.5 cursor-pointer rounded-full bg-color-card text-color-font hover:bg-color-dark focus:outline-none shadow transition-all duration-200'
            >
              <StopIcon size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
