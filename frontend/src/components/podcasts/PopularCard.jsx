import React from "react";
import cardImg from "../../assets/podcast-card.png";
import { useDispatch } from "react-redux";
import { setMediaUrl } from "../../features/mediaSlice";
// import cardImg from "../assets/podcast-img.jpg";

export default function PopularCard({ title, desc, fileUrl, type }) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(setMediaUrl({ path: fileUrl, type: type }));
  }
  return (
    <div>
      <div className="flex w-full items-center justify-center">
        <div>
          <div className="max-w-xs flex flex-col justify-between bg-color-bg hover:bg-color-card rounded-lg border-gray-400 py-4 px-4">
            <div className="flex flex-col gap-2">
              <div
                // tabIndex={-1}
                role="button"
                onClick={handleClick}
                className="group relative"
              >
                <img
                  src={cardImg}
                  className=" w-full h-full group-hover:opacity-90 shadow rounded-lg"
                  loading="lazy"
                  alt=""
                />
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
              <div className="flex mt-1 items-center justify-between text-color-font cursor-pointer">
                <h4 className="text-gray-200 font-bold">{title}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <p className="text-gray-300 text-sm">{desc}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
