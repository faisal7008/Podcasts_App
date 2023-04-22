import React from "react";
import cardImg from "../assets/podcast-card.png";
// import cardImg from "../assets/podcast-img.jpg";

export default function PopularCard() {
  return (
    <div>
      <div className="flex w-full items-center justify-center">
        <div>
          <div className="max-w-xs flex flex-col justify-between bg-color-bg hover:bg-color-card rounded-lg border-gray-400 py-4 px-4">
            <div className="flex flex-col gap-2">
              <img
                src={cardImg}
                className=" w-full h-full shadow rounded-lg"
                loading="lazy"
                alt=""
              />
              <h4 className="text-gray-200 font-bold">Title</h4>
              <p className="text-gray-300 text-sm">description</p>
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
