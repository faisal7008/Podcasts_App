import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PlayVideo from "../components/player/PlayVideo";
import PlayAudio from "../components/player/PlayAudio";

export default function Home() {
  const location = useLocation()
  console.log(location)
  const {audioPodcast, videoPodcast, hidePlayer} = useSelector(state => state.podcasts)

  return (
    // <div className='w-full flex'>
    //     {/* <div className=' w-1/6 p-2 border-r-2 h-screen'><Sidebar/></div>
    //     <div className=' w-5/6 p-2'><Main/></div> */}
    // </div>
    <div className="flex h-screen flex-no-wrap">
      <Sidebar />
      {/* <Main Component={}/> */}
      <Outlet />
      {/* { !location?.pathname?.includes('play-audio') && !location?.pathname?.includes('play-video') && audioPodcast?.fileUrl && <DisplayAudio audioUrl={audioPodcast?.fileUrl}/>}
      { !location?.pathname?.includes('play-video') && !location?.pathname?.includes('play-audio') && videoPodcast?.fileUrl && <DisplayVideo videoUrl={videoPodcast?.fileUrl}/>} */}
      {/* {videoPodcast && <>
      {hide ? <DisplayVideo setHide={setHide} videoUrl={videoPodcast?.fileUrl}/> : <PlayVideo hide={hide} setHide={setHide}/> }
      </>}
      {audioPodcast && <>
      {hide ? <DisplayAudio setHide={setHide} audioUrl={audioPodcast?.fileUrl}/> : <PlayAudio hide={hide} setHide={setHide}/>}
      </>} */}
      {audioPodcast && <PlayAudio hide={hidePlayer} />}
      {videoPodcast && <PlayVideo hide={hidePlayer} />}
    </div>
  );
}
