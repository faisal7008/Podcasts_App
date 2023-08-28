import React, { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../components/player/audioplayer.css';
import cardImg from '../assets/podcast-card.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ListCard from '../../components/podcasts/ListCard';
import { resetVideo } from '../../features/podcastSlice';

export default function PlayAudio() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { podcasts, podcast } = useSelector((state) => state.podcasts);
  // useEffect(() => {
  //   dispatch(resetVideo());
  // }, [podcast]);
  return (
    <div className='w-full min-h-full p-4 md:p-8 scroll-container overflow-auto lg:overflow-hidden'>
      <div className='flex gap-3 items-center'>
        <div
          onClick={() => navigate(-1)}
          className='p-1.5 cursor-pointer rounded-full hover:bg-color-card'
        >
          <svg
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
          </svg>
        </div>
        <h2 className='sm:text-xl tracking-wider font-semibold text-color-font'>Audio Player</h2>
      </div>
      <div className='flex flex-col lg:flex-row w-full h-full py-4 gap-4 '>
        <div className='lg:w-4/6 p-6 h-full bg-color-bg  rounded-xl'>
          <div className='grid gap-10'>
            <img
              src={cardImg}
              className=' place-self-center shadow rounded-lg'
              loading='lazy'
              alt=''
            />

            <div className=' flex justify-between'>
              <h2 className=' text-lg text-color-font'>{podcast.title}</h2>
              <h2 className=' text-lg text-color-font'>{podcast.desc}</h2>
            </div>
            <AudioPlayer
              // customIcons={}
              children={<h2> Hello </h2>}
              className=' bg-color-bg shadow-none'
              autoPlay
              src={audioUrl}
              onPlay={(e) => console.log('onPlay')}
              // other props here
            />
          </div>
        </div>
        <div className='lg:w-2/6 h-full px-6 pt-6 flex flex-col gap-3 bg-color-card rounded-xl'>
          <h2 className=' text-sm md:text-base font-semibold text-color-font'>Episodes</h2>
          <div className='flex flex-col overflow-auto h-full gap-2'>
            {podcasts
              // ?.filter((pod) => pod.type === "audio")
              // .slice(0, 3)
              ?.map((podcast) => (
                <ListCard key={podcast._id} podcast={podcast} />
              ))}
          </div>
        </div>
        <br className='lg:hidden' />
      </div>
    </div>
  );
}
