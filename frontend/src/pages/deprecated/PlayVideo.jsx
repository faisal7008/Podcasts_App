import React, { useEffect } from "react";
import cardImg from "../assets/podcast-card.png";
import NetPlayer from "netplayer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ListCard from "../../components/podcasts/ListCard";

const userimage =
  'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80';


export default function PlayVideo() {
  const navigate = useNavigate();
  const { podcasts, podcast } = useSelector((state) => state.podcasts);
  const { episodes } = useSelector(state => state.episodes)
  const dispatch = useDispatch()
  return (
    <div className="w-full h-full p-4 md:p-8 scroll-container overflow-auto lg:overflow-hidden">
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
                  file: `${podcast.fileUrl}`,
                  label: "1080p",
                },
              ]}
              autoPlay
            />
          </div>
          <div className=" flex justify-between">
            <h2 className=" text-lg mb-5 text-color-font">
              {podcast.title}
            </h2>
            <h2 className=" text-lg mb-5 text-color-font">
              {podcast.desc}
            </h2>
          </div>
          <div className="flex gap-3">
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src={userimage}
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold inline-flex items-center text-gray-900 truncate dark:text-white">
              {podcast?.speader}{" "}
              <span className="ml-2 text-xs font-medium font-mono text-gray-500">
                120M subscribers
              </span>
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            120M subscribers
            </p>
          </div>
          </div>
        </div>
        <div className="lg:w-2/6 h-full px-6 pt-6 flex flex-col gap-3 bg-color-card rounded-xl">
          <h2 className=" text-sm md:text-base font-semibold text-color-font">Episodes</h2>
          <div className="flex flex-col overflow-auto h-full gap-2">
        {episodes?.map((episode) => (
          <ListCard
            key={episode._id}
            episode={episode}
          />
        ))}
      </div>
        </div>
      </div>
    </div>
  );
}
