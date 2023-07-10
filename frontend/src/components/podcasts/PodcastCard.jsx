import React from "react";
import cardImg from "../../assets/podcast-card.png";
import { useDispatch, useSelector } from "react-redux";
import { setMediaUrl } from "../../features/mediaSlice";
import { useNavigate } from "react-router-dom";
import { resetAudio, resetVideo, setAudioPodcast, setHidePlayer, setVideoPodcast } from "../../features/podcastSlice";
// import cardImg from "../assets/podcast-img.jpg";

export default function PodcastCard({podcast}) {
  const { name: title, description: desc, fileUrl, type, speaker } = podcast
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.podcasts);
  function handleClick() {
    // dispatch(setMediaUrl({ path: fileUrl, type: type }));
    if(title && desc && fileUrl && type){
      if (type === "audio") {
        dispatch(setAudioPodcast(podcast));
        dispatch(resetVideo())
        // navigate("/play-audio");
        dispatch(setHidePlayer(false))
      } else {
        dispatch(setVideoPodcast(podcast));
        dispatch(resetAudio())
        // navigate("/play-video");
        dispatch(setHidePlayer(false))
      }
    } else {
      console.log('Provide complete data')
    }
  }
  return (
    // <div>
    //   <div className="flex w-full items-center justify-center">
    //     <div>
    <div className={"w-32 h-48 sm:w-48 sm:h-[17rem] flex flex-col justify-between bg-color-bg hover:bg-color-card rounded-lg border-gray-400 p-2 sm:p-4"}>
      <div className="flex flex-col gap-2">
        <div
          // tabIndex={-1}
          role="button"
          onClick={handleClick}
          className="group relative"
          // data-hs-overlay={
          //   type === "audio" ? "#display-audio" : "#display-video"
          // }
        >
          {cardImg ? <img
            src={cardImg}
            className=" w-full h-full group-hover:opacity-90 shadow rounded-lg"
            loading="lazy"
            alt=""
          /> : <div class="flex items-center justify-center h-40 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          </svg>
      </div>}
          <button class="opacity-0 absolute top-0 left-0 w-full h-full flex justify-center items-center group-hover:opacity-100 transition duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-14 h-14 text-color-font"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col sm:gap-1 px-1">
          <div className="flex gap-3 items-center justify-between text-color-font cursor-pointer">
            {title ? <h4 className="text-gray-200 w-5/6 text-sm sm:text-base font-medium truncate">
              {title}
            </h4> : <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 animate-pulse"></div>}
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
          {desc ? <p className="text-gray-300 text-xs font-normal truncate">{desc}</p> : <div class="h-2 mt-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>}
        </div>
      </div>
    </div>
  );
}
