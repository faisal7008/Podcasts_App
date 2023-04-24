import React from "react";
import { useSelector } from "react-redux";
import PopularCard from "../components/podcasts/PopularCard";
import AddPodcast from "../components/podcasts/AddPodcast";

export default function MyPodcasts() {
  const { user } = useSelector((state) => state.auth);
  const { podcasts } = useSelector((state) => state.podcasts);
  const videoPodcasts = podcasts.filter((podcast) => podcast.type === "video");
  const audioPodcasts = podcasts.filter((podcast) => podcast.type === "audio");

  return (
    <div className="flex flex-col gap-4 w-full py-10 h-full overflow-auto px-6">
      <div className=" flex justify-between items-center ">
        <h1 className="text-5xl text-color-font font-semibold mb-6">
          My Podcasts
        </h1>
        <button
          type="button"
          data-hs-overlay="#add-podcast"
          className="px-4 place-self-end py-3 w-max font-mono text-md font-semibold text-color-dark bg-color-font shadow rounded-full flex gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
            <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
          </svg>
          Add
        </button>
      </div>
      <h2 className="text-xl font-semibold text-color-font">Video Podcasts</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-2">
        {videoPodcasts.map((podcast) => (
          <PopularCard
            key={podcast._id}
            title={podcast.name}
            desc={podcast.description}
            fileUrl={podcast.fileUrl}
            type={podcast.type}
          />
        ))}
      </div>
      <h2 className="text-xl font-semibold text-color-font">Audio Podcasts</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 mb-2">
        {audioPodcasts.map((podcast) => (
          <PopularCard
            key={podcast._id}
            title={podcast.name}
            desc={podcast.description}
            fileUrl={podcast.fileUrl}
            type={podcast.type}
          />
        ))}
      </div>
      <AddPodcast />
    </div>
  );
}
