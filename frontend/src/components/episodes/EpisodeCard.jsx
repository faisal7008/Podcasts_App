import React from "react";
import cardImg from "../../assets/podcast-card.png";
import { useDispatch, useSelector } from "react-redux";
import { setEpisode } from "../../features/episodeSlice";
import { resetAudio, resetVideo, setAudioPodcast, setHidePlayer, setVideoPodcast } from "../../features/podcastSlice";
import PlayCircleIcon from "../icons/PlayCircleIcon";

export default function EpisodeCard({episode}) {
  const { _id: id, title, description, duration } = episode
  const dispatch = useDispatch();
  const {podcast} = useSelector(state => state.podcasts)
  const {episode: playingEpisode} = useSelector(state => state.episodes)

  const handleClick = async () => {
    dispatch(setEpisode(episode))
    if (podcast?.type === "audio") {
      dispatch(resetVideo())
      dispatch(setAudioPodcast(podcast));
      dispatch(setHidePlayer(false))
    } else {
      dispatch(resetAudio())
      dispatch(setVideoPodcast(podcast));
      dispatch(setHidePlayer(false))
    }
  }

  return (
    <div 
    onClick={handleClick} className="p-3 md:p-3 group relative cursor-pointer bg-color-bg shadow-lg rounded-md md:rounded-lg">
      <div className="flex items-center space-x-4">
      <div>
          <img
            src={cardImg}
            className="w-10 group-hover:opacity-90 shadow rounded"
            loading="lazy"
            alt=""
          />
          <div className={`opacity-0 absolute top-4 left-4 flex justify-center items-center group-hover:opacity-100 transition duration-200 ${playingEpisode && id === playingEpisode?._id ? 'opacity-100 animate-spin' : ''}`}>
          <PlayCircleIcon className="w-8 h-8 text-color-font" />
          </div>
        </div>
        <div className="flex-1 space-y-1 min-w-0">
          <p className="text-sm font-medium text-color-font truncate">
            {title} 
          </p>
          <p className="text-xs text-gray-50 truncate">{description}</p>
        </div>
        {playingEpisode && id === playingEpisode?._id ?
        <div className="inline-flex cursor-pointer px-3 py-1 bg-color-font items-center text-sm font-semibold text-color-dark rounded-lg shadow transition-all duration-200">
        playing
      </div> :
        <div className="inline-flex items-center text-sm font-medium text-color-font">
          {duration}
        </div>
        }
      </div>
    </div>
  );
}
