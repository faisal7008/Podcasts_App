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

  return (
    <div className="flex h-screen flex-nowrap">
      <Sidebar />
      <Outlet />
      {episode && audioPodcast && <PlayAudio hide={hidePlayer} />}
      {episode && videoPodcast && <PlayVideo hide={hidePlayer} />}
    </div>
  );
}
