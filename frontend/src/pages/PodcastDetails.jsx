import React, { useEffect, useState } from 'react';
import { podcastCardImg } from '../assets';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEpisodes, resetEpisode, setEpisode } from '../features/episodeSlice';
import EpisodeCard from '../components/episodes/EpisodeCard';
import { useNavigate, useParams } from 'react-router-dom';
import { BackIcon, PlayIcon, SaveIcon } from '../components/icons';
import AddEpisode from '../components/episodes/AddEpisode';
import { getPodcast, savePodcast } from '../features/podcastSlice';
import moment from 'moment';

export default function PodcastDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { podcastId } = useParams();
  const { episodes } = useSelector((state) => state.episodes);
  const { podcast } = useSelector((state) => state.podcasts);

  useEffect(() => {
    dispatch(getPodcast(podcastId));
    dispatch(getAllEpisodes(podcastId));
    // dispatch(resetEpisode());
  }, [podcastId]);

  const { profile } = useSelector((state) => state.auth);
  const [isFavourite, setIsFavourite] = useState(profile?.favoritePodcasts?.includes(podcast?._id));

  useEffect(() => {
    setIsFavourite(profile?.favoritePodcasts?.includes(podcast?._id));
  }, [profile]);

  const handleSave = () => {
    dispatch(savePodcast(podcast?._id));
    setIsFavourite((prev) => !prev);
  };
  return (
    <div className='p-4 md:p-7 overflow-y-auto w-full h-full'>
      <div className='flex gap-3 items-center'>
        <div
          onClick={() => navigate(-1)}
          className='p-1.5 cursor-pointer rounded-full hover:bg-color-card'
        >
          <BackIcon size={18} />
        </div>
        <h2 className='text-lg sm:text-xl inline-flex min-w-max tracking-wider font-semibold text-color-font'>
          My Podcasts
        </h2>
        <p className='text-2xl font-light'> | </p>
        <h2 className='sm:text-lg tracking-wider font-light text-color-font truncate'>
          {podcast?.name}
        </h2>
      </div>
      <div className='flex flex-col md:flex-row pb-4 w-full h-full'>
        <div className='md:w-5/12 h-full p-4 flex flex-col items-center gap-4'>
          <div>
            <img src={podcastCardImg} className='w-64 rounded-lg shadow-lg' />
          </div>
          <div className='self-start'>
            <h2 className='text-2xl font-semibold mb-2'>{podcast?.name}</h2>
            <h2 className='text-base font-medium'>by {podcast?.speaker}</h2>
            <h2 className='inline-flex w-full justify-between text-xs font-light'>
              {' '}
              <span> 2.2M views </span>{' '}
              <span> Last updated on {moment(podcast?.updatedAt).format('ll')} </span>
            </h2>
            <div className='flex justify-between gap-4 my-4'>
              <button
                onClick={() => {
                  dispatch(setEpisode(episodes[0]));
                }}
                className='inline-flex gap-2 items-center justify-center px-4 py-2 text-sm font-semibold w-full bg-color-font text-color-card rounded-full focus:outline-none  transition-opacity duration-200 ease-linear cursor-pointer'
              >
                <PlayIcon size={18} />
                Play all
              </button>
              <div
                onClick={handleSave}
                className='inline-flex gap-2 items-center justify-center px-4 py-2 text-sm font-semibold w-full bg-color-font text-color-card rounded-full focus:outline-none  transition-opacity duration-200 ease-linear cursor-pointer'
              >
                <SaveIcon size={18} fill={isFavourite && 'currentColor'} />
                {isFavourite ? 'saved' : 'save'}
              </div>
            </div>
            <div className='w-full text-base text-justify'>{podcast?.description}</div>
          </div>
        </div>
        <div className='p-4 w-full min-h-full overflow-y-auto space-y-3'>
          <div className='flex justify-between items-start'>
            <div className='flex gap-2 items-center'>
              <h2 className='text-lg text-color-font font-semibold'>Episodes</h2>
              <p className='text-color-bg text-sm px-2.5 py-1 rounded-full font-mono font-semibold bg-color-font'>
                {episodes?.length}
              </p>
            </div>
            <AddEpisode podcastId={podcastId} />
          </div>
          <div className='space-y-3'>
            {episodes?.map((ep) => (
              <EpisodeCard key={ep?._id} episode={ep} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
