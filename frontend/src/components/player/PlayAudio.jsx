import React, { useEffect, useRef, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../player/audioplayer.css';
import { podcastCardImg } from '../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { resetAudio, savePodcast, setHidePlayer } from '../../features/podcastSlice';
import { BackIcon, CloseIcon, SaveIcon } from '../icons';
import EpisodeCard from '../episodes/EpisodeCard';
import { getAllEpisodes, resetEpisode } from '../../features/episodeSlice';

const userimage =
  'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80';

export default function PlayAudio({ hide }) {
  const { profile } = useSelector((state) => state.auth);
  const { podcasts, audioPodcast } = useSelector((state) => state.podcasts);
  const { episodes, episode } = useSelector((state) => state.episodes);
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(
    profile?.favoritePodcasts?.includes(audioPodcast._id),
  );

  useEffect(() => {
    setIsFavourite(profile?.favoritePodcasts?.includes(audioPodcast._id));
  }, [profile]);

  const handleSave = () => {
    dispatch(savePodcast(audioPodcast._id));
    setIsFavourite((prev) => !prev);
  };

  const handleClick = () => {
    if (hide === true) {
      dispatch(setHidePlayer(false));
    }
  };

  return (
    <div
      className={
        !hide
          ? `fixed lg:w-5/6 w-full lg:left-64 z-50 bg-color-dark p-7 h-full scroll-container overflow-auto transition-all duration-700`
          : `fixed bottom-0 lg:right-0 z-40 lg:mb-5 lg:mr-5 p-4 cursor-pointer bg-slate-900 shadow-xl w-full lg:w-1/3 rounded-t-2xl lg:rounded-2xl transition-all duration-700`
      }
    >
      {!hide && (
        <div className='flex gap-3 items-center'>
          <div
            onClick={() => dispatch(setHidePlayer(true))}
            className='p-1.5 cursor-pointer rounded-full hover:bg-color-card'
          >
            {/* <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg> */}
            <BackIcon size={18} />
          </div>
          <h2 className='text-lg sm:text-xl tracking-wider font-semibold text-color-font'>
            Audio Player
          </h2>
        </div>
      )}
      {hide && (
        <div onClick={handleClick} className='flex justify-between'>
          <div className='grid px-4'>
            <h2 className=' text-base font-medium text-color-font'>{audioPodcast?.name}</h2>
            <h2 className=' text-sm font-light text-color-font'>{audioPodcast?.speaker}</h2>
          </div>
          <div>
            <button
              className='p-1.5 rounded-full bg-color-card text-color-font hover:bg-color-dark focus:outline-none shadow transition-all duration-200'
              onClick={() => dispatch(resetEpisode())}
            >
              <CloseIcon size={16} />
            </button>
          </div>
        </div>
      )}
      <div className={!hide && 'flex flex-col lg:flex-row w-full min-h-full py-4 gap-4 '}>
        <div className={!hide && 'lg:w-4/6 p-6 min-h-full rounded-xl bg-color-bg'}>
          <div className=' grid gap-3'>
            {!hide && (
              <img
                src={podcastCardImg}
                className='w-64 place-self-center shadow rounded-lg'
                loading='lazy'
                alt=''
              />
            )}
            <div className='z-[1000]'>
              <AudioPlayer
                // customIcons={}
                // children={<h2> Hello </h2>}
                className={`${hide ? 'bg-slate-900' : 'bg-color-bg'} z-[1000] p-2 shadow-none`}
                autoPlay
                src={episode?.mediaUrl}
                onPlay={(e) => console.log('onPlay')}
                // other props here
              />
            </div>
            {!hide && (
              <>
                <div className='flex justify-between'>
                  <h2 className='text-lg font-medium text-color-font'>
                    {episode.title} <span className=' text-2xl mx-1 font-light'> | </span>{' '}
                    {audioPodcast.name}
                  </h2>
                </div>
                <div className='flex justify-between items-start'>
                  <div className='flex gap-3'>
                    <div className='flex-shrink-0'>
                      <img className='w-10 h-10 rounded-full' src={userimage} alt='Neil image' />
                    </div>
                    <div className='flex flex-col justify-center'>
                      <p className='text-sm font-semibold inline-flex items-center text-color-font truncate'>
                        {audioPodcast?.speaker}{' '}
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
                <div className='w-full text-sm rounded-xl px-4 py-3 bg-color-card/100 '>
                  {audioPodcast?.description}
                </div>
              </>
            )}
          </div>
        </div>
        {!hide && (
          <div className='lg:w-2/6 h-full p-5 flex flex-col gap-3 bg-color-card rounded-xl'>
            <h2 className=' text-sm md:text-base font-semibold text-color-font'>Episodes</h2>
            <div className='flex flex-col overflow-auto min-h-full gap-2'>
              {episodes?.map((episode) => (
                <EpisodeCard key={episode._id} episode={episode} />
              ))}
            </div>
          </div>
        )}
        {!hide && <br className='lg:hidden' />}
      </div>
    </div>
  );
}
