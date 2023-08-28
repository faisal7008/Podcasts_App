import React from 'react';
import { podcastCardImg } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetEpisode } from '../../features/episodeSlice';
import PlayCircleIcon from '../icons/PlayCircleIcon';

export default function PodcastCard({ podcast }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(resetEpisode());
    navigate(`/podcasts/${podcast._id}`);
  };
  return (
    <div
      className={
        'w-32 h-48 sm:w-48 sm:h-[17rem] flex flex-col justify-between bg-color-bg hover:bg-color-card rounded-lg border-gray-400 p-2 sm:p-4'
      }
    >
      <div className='flex flex-col gap-2'>
        <div role='button' onClick={handleClick} className='group relative focus:outline-none'>
          {podcastCardImg ? (
            <img
              src={podcastCardImg}
              className=' w-full h-full group-hover:opacity-90 shadow rounded-lg'
              loading='lazy'
              alt=''
            />
          ) : (
            <div className='flex items-center justify-center h-40 mb-4 bg-gray-300 rounded dark:bg-gray-700'>
              <svg
                className='w-10 h-10 text-gray-200 dark:text-gray-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 16 20'
              >
                <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
              </svg>
            </div>
          )}
          <button className='opacity-0 absolute top-0 left-0 w-full h-full flex justify-center items-center group-hover:opacity-100 focus:outline-none transition duration-200'>
            <PlayCircleIcon className='w-14 h-14 text-color-font' />
          </button>
        </div>
        <div className='flex flex-col sm:gap-1 px-1'>
          <div className='flex gap-3 items-center justify-between text-color-font cursor-pointer'>
            {podcast?.name ? (
              <h4 className='text-gray-200 text-sm sm:text-base font-medium truncate'>
                {podcast?.name}
              </h4>
            ) : (
              <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse'></div>
            )}
            {/* <SaveIcon/> */}
          </div>
          {podcast?.description ? (
            <p className='text-gray-300 text-xs font-normal truncate'>{podcast?.description}</p>
          ) : (
            <div className='h-2 mt-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          )}
        </div>
      </div>
    </div>
  );
}
