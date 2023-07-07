import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "../components/player/audioplayer.css";
import cardImg from "../assets/podcast-card.png";
import NetPlayer from "netplayer";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ListCard from "../components/podcasts/ListCard";

export default function PlayVideo() {
  const navigate = useNavigate();
  const { podcasts, videoPodcast } = useSelector((state) => state.podcasts);
  return (
    <div className="w-full py-8 h-full pl-6 pr-10 scroll-container overflow-auto lg:overflow-hidden">
      <div className="flex gap-3 items-center">
        <div onClick={() => navigate(-1)} className="p-1.5 cursor-pointer rounded-full hover:bg-color-card">
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
        <h2 className="sm:text-xl tracking-wider font-semibold text-color-font">Video Player</h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-full py-4 gap-4 ">
        <div className="lg:w-4/6 p-6 bg-color-bg rounded-xl">
          <div className="mb-4 flex-1">
            <NetPlayer
              // style={{ maxHeight: "500px" }}
              sources={[
                {
                  file: `${videoPodcast.fileUrl}`,
                  label: "1080p",
                },
              ]}
              autoPlay
            />
          </div>
          <div className=" flex justify-between">
            <h2 className=" text-lg mb-5 text-color-font">
              {videoPodcast.title}
            </h2>
            <h2 className=" text-lg mb-5 text-color-font">
              {videoPodcast.desc}
            </h2>
          </div>
        </div>
        <div className="lg:w-2/6 h-full px-6 pt-6 flex flex-col gap-3 bg-color-card rounded-xl">
          <h2 className=" text-sm md:text-base font-semibold text-color-font">Episodes</h2>
          <div className="flex flex-col overflow-auto h-full gap-2">
        {podcasts?.filter(pod => pod.type === 'video').slice(0,3)?.map((podcast) => (
          <ListCard
            key={podcast._id}
            title={podcast.name}
            desc={podcast.description}
            fileUrl={podcast.fileUrl}
            type={podcast.type}
            speaker={podcast.speaker}
          />
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}
