import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../player/audioplayer.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetAudio, setHidePlayer } from '../../features/podcastSlice';

export default function DisplayAudio({ audioUrl, setHide }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setHidePlayer(false))}
      className='fixed bottom-0 lg:right-0 z-40 lg:mb-5 lg:mr-5 p-5 bg-slate-900 shadow-xl w-full lg:w-1/3 rounded-t-2xl lg:rounded-2xl'
    >
      <div className='flex justify-end'>
        <button type='button' onClick={() => dispatch(resetAudio())}>
          <svg
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            className='w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>
      <AudioPlayer
        // customIcons={}
        children={<h2> Hello </h2>}
        className=' bg-slate-900 shadow-none'
        autoPlay
        src={audioUrl}
        onPlay={(e) => console.log('onPlay')}
        // other props here
      />
    </div>
  );
}
