import React from "react";
import cardImg from "../../assets/podcast-card.png";
import { useDispatch, useSelector } from "react-redux";
import { setMediaUrl } from "../../features/mediaSlice";
import { useNavigate } from "react-router-dom";
import { setAudioPodcast, setVideoPodcast } from "../../features/podcastSlice";
// import cardImg from "../assets/podcast-img.jpg";

export default function ListCard({ title, desc, fileUrl, type, speaker }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.podcasts);
  function handleClick() {
    // dispatch(setMediaUrl({ path: fileUrl, type: type }));
    if (title && desc && fileUrl && type) {
      if (type === "audio") {
        dispatch(setAudioPodcast({ title, desc, fileUrl, type }));
        navigate("/play-audio");
      } else {
        dispatch(setVideoPodcast({ title, desc, fileUrl, type }));
        navigate("/play-video");
      }
    } else {
      console.log("Provide complete data");
    }
  }
  return (
    <div 
    onClick={handleClick} className="p-2 md:p-3 group relative cursor-pointer bg-color-bg shadow-lg rounded-md md:rounded-lg">
      <div className="flex items-center space-x-4">
      <div>
          <img
            src={cardImg}
            className="w-10 group-hover:opacity-90 shadow rounded"
            loading="lazy"
            alt=""
          />
          <button class="opacity-0 absolute top-4 left-4 flex justify-center items-center group-hover:opacity-100 transition duration-200">
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
            {title}
          </p>
          <p className="text-xs text-gray-50 truncate">{speaker}</p>
        </div>
        <div className="inline-flex items-center text-sm font-medium text-color-font">
          3 Episodes
        </div>
      </div>
    </div>
  );
}
