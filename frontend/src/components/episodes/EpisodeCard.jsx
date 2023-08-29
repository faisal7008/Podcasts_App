import React from 'react';
import cardImg from '../../assets/podcast-card.png';
import { useDispatch, useSelector } from 'react-redux';
import { setEpisode } from '../../features/episodeSlice';
import {
  resetAudio,
  resetVideo,
  setAudioPodcast,
  setHidePlayer,
  setVideoPodcast,
} from '../../features/podcastSlice';
import PlayCircleIcon from '../icons/PlayCircleIcon';

export default function EpisodeCard({ episode, canEdit, setEpisodesToBeDeleted }) {
  const { _id: id, title, description, duration } = episode;
  const dispatch = useDispatch();
  const { podcast } = useSelector((state) => state.podcasts);
  const { episode: playingEpisode } = useSelector((state) => state.episodes);

  const handleClick = async (e) => {
    if (!canEdit) {
      dispatch(setEpisode(episode));
      if (podcast?.type === 'audio') {
        dispatch(resetVideo());
        dispatch(setAudioPodcast(podcast));
        dispatch(setHidePlayer(false));
      } else {
        dispatch(resetAudio());
        dispatch(setVideoPodcast(podcast));
        dispatch(setHidePlayer(false));
      }
    }
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setEpisodesToBeDeleted((prev) => [...prev, episode?._id]);
    } else {
      setEpisodesToBeDeleted((prev) => prev.filter((id) => id !== episode?._id));
    }
  };

  return (
    <div className='p-3 md:p-3 group relative cursor-pointer bg-color-bg shadow-lg rounded-md md:rounded-lg'>
      <div className='flex items-center gap-3'>
        {canEdit && (
          <input
            type='checkbox'
            className='shrink-0 border-gray-200 rounded text-color-dark focus:ring-color-bg cursor-pointer'
            id={`hs-checkbox-group-${episode?._id}`}
            onChange={handleCheck}
          />
        )}
        <label
          htmlFor={`hs-checkbox-group-${episode?._id}`}
          onClick={handleClick}
          className='w-full flex items-center space-x-4 cursor-pointer'
        >
          <div className='relative'>
            {/* <div className='flex gap-3 items-center'> */}
            <img
              src={cardImg}
              className='w-10 group-hover:opacity-90 shadow rounded'
              loading='lazy'
              alt=''
            />
            {/* </div> */}
            <div
              className={`opacity-0 absolute top-1 left-1 flex justify-center items-center group-hover:opacity-100 transition duration-200 ${
                playingEpisode && id === playingEpisode?._id ? 'opacity-100 animate-spin' : ''
              }`}
            >
              <PlayCircleIcon className='w-8 h-8 text-color-font' />
            </div>
          </div>
          <div className='flex-1 space-y-1 min-w-0'>
            <p className='text-sm font-medium text-color-font truncate'>{title}</p>
            <p className='text-xs text-gray-50 truncate'>{description}</p>
          </div>
          {playingEpisode && id === playingEpisode?._id ? (
            <div className='inline-flex cursor-pointer px-3 py-1 bg-color-font items-center text-sm font-semibold text-color-dark rounded-lg shadow transition-all duration-200'>
              playing
            </div>
          ) : (
            <div className='inline-flex items-center text-sm font-medium text-color-font'>
              {duration}
            </div>
          )}
        </label>
      </div>
    </div>
  );
}
