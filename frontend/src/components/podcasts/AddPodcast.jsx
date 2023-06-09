import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../handlers/Loader";
import axios from "axios";
import { addPodcast } from "../../features/podcastSlice";
import UploadPodcast from "./UploadPodcast";
import { current } from "@reduxjs/toolkit";

export default function AddPodcast() {
  const dispatch = useDispatch();
  const closeBtn = useRef()
  const { status } = useSelector((state) => state.podcasts);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  
  const resetState = () => {
    setName("")
    setCategory("")
    setDescription("")
    setType("")
    setSpeaker("")
    setFile(null)
    setFileUrl("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const podcastData = {
      name,
      description,
      category,
      type: file?.type?.split("/")[0],
      speaker,
      fileUrl, // Use fileData.url to set the fileUrl
    };
    dispatch(addPodcast(podcastData));
    closeBtn?.current?.click()
    resetState()
    // console.log(podcastData);
  };

  return (
    <div>
      <div
        id="add-podcast"
        className="hs-overlay hidden w-full h-full fixed -top-5 left-0 z-[60] scroll-container overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-full sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex justify-center items-center">
          <div className="relative flex p-6 flex-col max-h-[95vh] w-full md:w-3/5 lg:w-2/5  bg-white border shadow-sm rounded h-5/6">
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold tracking-wide text-slate-800 text-xl">
                Add Podcast
              </h1>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                ref={closeBtn}
                data-hs-overlay="#add-podcast"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  for="title"
                  className="block mb-2 text-xs font-semibold text-gray-900"
                >
                  Podcast Name <span className=" text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5"
                  placeholder="Podcast name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="title"
                  className="block mb-2 text-xs font-semibold text-gray-900"
                >
                  Podcast Description <span className=" text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5"
                  placeholder="Podcast description"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  for="title"
                  className="block mb-2 text-xs font-semibold text-gray-900"
                >
                  Category <span className=" text-rose-600">*</span>
                </label>
                <select
                  className="py-3 px-4 pr-9 block w-full border-gray-200 text-gray-800 rounded-md text-sm focus:border-stone-500 focus:ring-stone-500"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option>Select the category</option>
                  <option value={"Educational"}>Educational</option>
                  <option value={"News and Politics"}>News and Politics</option>
                  <option value={"Sports"}>Sports</option>
                  <option value={"Motivation & Inspiration"}>
                    Motivation & Inspiration
                  </option>
                  <option value={"Arts & Entertainment"}>
                    Arts & Entertainment
                  </option>
                  <option value={"Comedy"}>Comedy</option>
                </select>
              </div>
              {/* 
              <div className="mb-4">
                <label
                  for="title"
                  className="block mb-2 text-xs font-semibold text-gray-900"
                >
                  Type <span className=" text-rose-600">*</span>
                </label>
                <div className="flex gap-x-6">
                  <div className="flex">
                    <input
                      type="radio"
                      value={type}
                      name="hs-radio-group"
                      onClick={(e) => setType(e.target.value)}
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full text-stone-600 focus:ring-stone-500"
                      id="hs-radio-group-2"
                    />
                    <label
                      for="hs-radio-group-2"
                      className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                    >
                      Audio
                    </label>
                  </div>
                  <div className="flex">
                    <input
                      type="radio"
                      value={type}
                      name="hs-radio-group"
                      onClick={(e) => setType(e.target.value)}
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full text-stone-600 focus:ring-stone-500"
                      id="hs-radio-group-3"
                    />
                    <label
                      for="hs-radio-group-3"
                      className="text-sm text-gray-500 ml-2 dark:text-gray-400"
                    >
                      Video
                    </label>
                  </div>
                </div>
              </div> */}

              <div className="mb-4">
                <label
                  for="title"
                  className="block mb-2 text-xs font-semibold text-gray-900"
                >
                  Speaker <span className=" text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  onChange={(e) => setSpeaker(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5"
                  placeholder="Speaker Name"
                  required
                />
              </div>
<UploadPodcast file={file} setFile={setFile} setFileUrl={setFileUrl}/>

              <button
                type="submit"
                className="mt-2 text-white inline-flex justify-center items-center bg-stone-700 hover:bg-stone-800 w-full focus:ring-4 focus:ring-stone-300 font-medium rounded text-sm px-5 py-2.5 mr-2 disabled:bg-stone-500"
                disabled={!fileUrl || !name || !description || !speaker || !category}
              >
                {status === "loading" ? <Loader /> : <>Add</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
