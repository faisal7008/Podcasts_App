import React from "react";

export default function AddPodcast() {
  return (
    <div>
      <div
        id="add-podcast"
        className="hs-overlay hidden w-full h-full fixed -top-5 left-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-full sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex justify-center items-center">
          <div className="relative flex p-6 flex-col max-h-[95vh] w-2/5 bg-white border shadow-sm rounded h-5/6">
            <div className="flex justify-between mb-4">
              <h1 className="font-semibold tracking-wide text-slate-800 text-xl">
                Add Podcast
              </h1>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <form
            // onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  for="title"
                  className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white"
                >
                  Podcast Name <span className=" text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  // onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5"
                  placeholder="Podcast name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  for="title"
                  className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white"
                >
                  Podcast Description <span className=" text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  // onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-stone-500 focus:border-stone-500 block w-full p-2.5"
                  placeholder="Podcast description"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  for="title"
                  className="block mb-2 text-xs font-semibold text-gray-900 dark:text-white"
                >
                  Category <span className=" text-rose-600">*</span>
                </label>
                <select class="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                  <option selected>Select the category</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button
                type="submit"
                className="text-white inline-flex justify-center items-center bg-stone-700 hover:bg-stone-800 w-full focus:ring-4 focus:ring-stone-300 font-medium rounded text-sm px-5 py-2.5 mr-2"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
