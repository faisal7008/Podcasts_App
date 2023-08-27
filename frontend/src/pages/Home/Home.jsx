import React, { useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlayVideo from "../../components/player/PlayVideo";
import PlayAudio from "../../components/player/PlayAudio";
import { getAllEpisodes } from "../../features/episodeSlice";
export default function Home() {
  const dispatch = useDispatch()
  const {audioPodcast, videoPodcast, hidePlayer, podcast} = useSelector(state => state.podcasts)
  const {episode} = useSelector(state => state.episodes)

  useEffect(() => {
    dispatch(getAllEpisodes(audioPodcast?._id))
  }, [audioPodcast])
  useEffect(() => {
    dispatch(getAllEpisodes(videoPodcast?._id))
  }, [videoPodcast])
  // useEffect(() => {
  //   if (podcast?.type === "audio") {
  //     dispatch(setAudioUrl(episode?.mediaUrl));
  //     dispatch(resetVideo())
  //     dispatch(setHidePlayer(false))
  //   } else {
  //     dispatch(setVideoUrl(episode?.mediaUrl));
  //     dispatch(resetAudio())
  //     dispatch(setHidePlayer(false))
  //   }
  // }, [podcast, episode])

  return (
    <div className="flex h-screen flex-nowrap">
      <Sidebar />
      {/* <Main Component={}/> */}
      <Outlet />
      {episode && audioPodcast && <PlayAudio hide={hidePlayer} />}
      {episode && videoPodcast && <PlayVideo hide={hidePlayer} />}
    </div>
  );
}
