import React, { useEffect, useState } from "react";
import { podcastCardImg } from "../../assets";
import NetPlayer from "netplayer";
import { useDispatch, useSelector } from "react-redux";
import { savePodcast, setHidePlayer } from "../../features/podcastSlice";
import EpisodeCard from "../podcasts/EpisodeCard";
import { SaveIcon } from "../icons";
import { getAllEpisodes } from "../../features/episodeSlice";

const userimage =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80";

export default function PlayVideo({ hide }) {
  const { profile } = useSelector((state) => state.auth);
  const { videoPodcast } = useSelector((state) => state.podcasts);
  const { episodes, episode } = useSelector((state) => state.episodes);
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(profile?.favoritePodcasts?.includes(videoPodcast._id))

  useEffect(() => {
    setIsFavourite(profile?.favoritePodcasts?.includes(videoPodcast._id))
  }, [profile])

  const handleSave = () => {
    dispatch(savePodcast(videoPodcast._id))
    setIsFavourite(prev => !prev)
  }

  return !hide ? (
    <div
      className={
        "fixed lg:w-5/6 w-full lg:left-64 z-50 bg-color-dark p-4 sm:p-7 h-full scroll-container overflow-y-auto transition-all duration-700"
      }
    >
      <div className="flex gap-3 items-center">
        <div
          onClick={() => dispatch(setHidePlayer(true))}
          className="p-1.5 cursor-pointer rounded-full hover:bg-color-card"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <h2 className="sm:text-xl tracking-wider font-semibold text-color-font">
          Video Player
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-full py-4 gap-4">
        <div className=" space-y-3 lg:w-4/6 p-5 bg-color-bg rounded-xl">
          <div className="flex-1">
            <NetPlayer
              // style={{ maxHeight: "500px" }}
              sources={[
                {
                  file: `${episode?.mediaUrl}`,
                  label: "1080p",
                },
              ]}
              autoPlay
            />
          </div>
          <div className="flex justify-between">
            <h2 className="text-lg font-medium text-color-font">
               {episode.title} <span className=" text-2xl mx-1 font-light"> | </span> {videoPodcast.name}
            </h2>
          </div>
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <img
                  className="w-10 h-10 rounded-full"
                  src={userimage}
                  alt="Neil image"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold inline-flex items-center text-color-font truncate">
                  {videoPodcast?.speaker}{" "}
                  {/* <span className="ml-2 text-xs font-medium font-mono text-gray-200">
                  120M subscribers
                </span> */}
                </p>
                <p className="text-xs font-light text-gray-200 truncate">
                  120M subscribers
                </p>
              </div>
            </div>
            <div onClick={handleSave} className="inline-flex items-center gap-2 font-medium px-4 py-2 rounded-full text-sm bg-color-font text-color-bg outline-none border-none transition-opacity duration-200 ease-linear cursor-pointer">
              <SaveIcon size={18} fill={isFavourite && "currentColor"}/>
              {isFavourite ? 'saved' : 'save'}
            </div>
          </div>
          <div className="w-full text-sm rounded-xl px-4 py-3 bg-color-card/100 ">
                {videoPodcast?.description}
          </div>
        </div>
        <div className="lg:w-2/6 h-full p-5 flex flex-col gap-3 bg-color-card rounded-xl">
          <h2 className=" text-sm md:text-base font-semibold text-color-font">
            Episodes
          </h2>
          <div className="flex flex-col overflow-auto min-h-full gap-2">
            {episodes?.map((episode) => (
              <EpisodeCard key={episode._id} episode={episode} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      onClick={() => dispatch(setHidePlayer(false))}
      className="fixed bottom-0 lg:right-0 z-40 lg:mb-5 lg:mr-5 p-5 bg-slate-900 shadow-xl w-full lg:w-1/3 rounded-t-2xl lg:rounded-2xl transition-all duration-700"
    >
      <div className="group relative cursor-pointer">
        <div className="flex items-center space-x-4">
          <div>
            <img
              src={podcastCardImg}
              className="w-10 group-hover:opacity-90 shadow rounded"
              loading="lazy"
              alt=""
            />
            <button className="opacity-0 absolute top-1 left-1 flex justify-center items-center group-hover:opacity-100 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-color-font"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 space-y-1 min-w-0">
            <p className="text-sm font-medium text-color-font truncate">
              {videoPodcast.name}
            </p>
            <p className="text-xs text-gray-50 truncate">{videoPodcast.speaker}</p>
          </div>

          <div className="inline-flex cursor-pointer px-3 py-1 bg-color-bg hover:bg-color-dark items-center text-sm font-medium text-color-font rounded-lg shadow transition-all duration-200">
            Resume playing
          </div>
        </div>
      </div>
    </div>
  );
}
