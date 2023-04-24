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
              <h4 className="text-gray-200 font-bold">{title}</h4>
              <p className="text-gray-300 text-sm">{desc}</p>
            </div>
            {/* <div>
              <div className="flex items-center justify-end text-gray-800">
                <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-pencil"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                  </svg>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
