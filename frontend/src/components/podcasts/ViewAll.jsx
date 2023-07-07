import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PodcastCard from "./PodcastCard";

export default function ViewAll() {
  const navigate = useNavigate();
  const location = useLocation();
  const { podcastData, title } = location.state;
  console.log(podcastData);
  return (
    <div className="flex flex-col gap-4 w-full py-8 h-full scroll-container overflow-auto px-6">
      <div className="flex gap-3 items-center">
        <div onClick={() => navigate(-1)} className="p-1.5 cursor-pointer rounded-full hover:bg-color-card">
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <h2 className="sm:text-xl tracking-wider font-semibold text-color-font">{title}</h2>
      </div>
      <div className=" inline-flex px-5 py-2 flex-wrap gap-3 sm:gap-8 mb-2">
        {podcastData?.map((podcast) => (
          <PodcastCard
            key={podcast._id}
            title={podcast.name}
            desc={podcast.description}
            fileUrl={podcast.fileUrl}
            type={podcast.type}
          />
        ))}
        {podcastData?.map((podcast) => (
          <PodcastCard
            key={podcast._id}
            title={podcast.name}
            desc={podcast.description}
            fileUrl={podcast.fileUrl}
            type={podcast.type}
          />
        ))}
      </div>
    </div>
  );
}
