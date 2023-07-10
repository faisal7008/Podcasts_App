import NetPlayer from "netplayer";
import React from "react";
import cardImg from "../../assets/podcast-card.png";
import { setHidePlayer } from "../../features/podcastSlice";
import { useDispatch } from "react-redux";

export default function DisplayVideo({setHide}) {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(setHidePlayer(false))} className="fixed bottom-0 lg:right-0 z-40 lg:mb-5 lg:mr-5 p-5 bg-slate-900 shadow-xl w-full lg:w-1/3 rounded-t-2xl lg:rounded-2xl transition-all duration-700">
       <div className="group relative cursor-pointer">
      <div className="flex items-center space-x-4">
      <div>
          <img
            src={cardImg}
            className="w-10 group-hover:opacity-90 shadow rounded"
            loading="lazy"
            alt=""
          />
          <button class="opacity-0 absolute top-1 left-1 flex justify-center items-center group-hover:opacity-100 transition duration-200">
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
            title
          </p>
          <p className="text-xs text-gray-50 truncate">speaker</p>
        </div>
        <div className="inline-flex items-center text-sm font-medium text-color-font">
          Resume playing
        </div>
      </div>
    </div>
    </div>
  );
}
