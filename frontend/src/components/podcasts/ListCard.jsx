import React from 'react';
import { podcastCardImg } from '../../assets';
import { useDispatch } from 'react-redux';
import { setPodcast } from '../../features/podcastSlice';
import PlayCircleIcon from '../icons/PlayCircleIcon';
import { useNavigate } from 'react-router-dom';

export default function ListCard({ podcast }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleClick = async () => {
    dispatch(setPodcast(podcast));
    navigate(`/podcasts/${podcast._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className='p-2 md:p-3 group relative cursor-pointer bg-color-bg shadow-lg rounded-md md:rounded-lg'
    >
      <div className='flex items-center space-x-4'>
        <div>
          <img
            src={podcastCardImg}
            className='w-10 group-hover:opacity-90 shadow rounded'
            loading='lazy'
            alt=''
          />
          <button className='opacity-0 absolute -m-1 md:m-0 top-4 left-4 flex justify-center items-center group-hover:opacity-100 transition duration-200'>
            <PlayCircleIcon className='w-8 h-8 text-color-font' />
          </button>
        </div>
        <div className='flex-1 space-y-1 min-w-0'>
          <p className='text-sm font-medium text-color-font truncate'>{podcast?.name}</p>
          <p className='text-xs text-gray-50 truncate'>{podcast?.speaker}</p>
        </div>
        <div className='inline-flex items-center text-sm font-medium text-color-font'>
          {podcast?.episodes?.length} Episodes
        </div>
      </div>
    </div>
  );
}
