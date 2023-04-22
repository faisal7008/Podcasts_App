import React, { useEffect, useState } from "react";
import logo from "../assets/icons8-podcasts-96.png";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   console.log(isOpen);
  // }, [isOpen]);

  return (
    <div>
      {/* Sidebar starts */}
      {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
      <div className="w-64 absolute sm:relative bg-slate-900 shadow md:h-full hidden md:flex flex-col justify-between">
        <div className="px-6 py-6">
          <div className="w-full flex gap-1 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="384"
              height="384"
              viewBox="0,0,256,256"
              className=" h-16 w-16"
            >
              <g
                fill="#f4eee0"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M18,3h-12c-1.654,0 -3,1.346 -3,3v12c0,1.654 1.346,3 3,3h12c1.654,0 3,-1.346 3,-3v-12c0,-1.654 -1.346,-3 -3,-3zM13.005,18.279c-0.18,0.518 -0.674,0.721 -1.005,0.721c-0.331,0 -0.825,-0.203 -1.005,-0.721c-0.18,-0.518 -0.495,-2.311 -0.495,-3.513c0,-1.202 1.064,-1.266 1.5,-1.266c0.436,0 1.5,0.065 1.5,1.266c0,1.202 -0.316,2.995 -0.495,3.513zM10.75,11.25c0,-0.69 0.56,-1.25 1.25,-1.25c0.69,0 1.25,0.56 1.25,1.25c0,0.69 -0.56,1.25 -1.25,1.25c-0.69,0 -1.25,-0.56 -1.25,-1.25zM12,8.5c-1.654,0 -3,1.346 -3,3c0,0.804 0.322,1.532 0.839,2.071c-0.177,0.296 -0.282,0.647 -0.316,1.045c-0.921,-0.734 -1.523,-1.85 -1.523,-3.116c0,-2.206 1.794,-4 4,-4c2.206,0 4,1.794 4,4c0,1.266 -0.602,2.382 -1.522,3.116c-0.034,-0.397 -0.14,-0.749 -0.316,-1.045c0.516,-0.539 0.838,-1.267 0.838,-2.071c0,-1.654 -1.346,-3 -3,-3zM14.333,17.028c0.052,-0.396 0.096,-0.804 0.125,-1.201c1.51,-0.862 2.542,-2.468 2.542,-4.327c0,-2.757 -2.243,-5 -5,-5c-2.757,0 -5,2.243 -5,5c0,1.859 1.032,3.465 2.542,4.327c0.03,0.397 0.073,0.805 0.125,1.201c-2.153,-0.912 -3.667,-3.046 -3.667,-5.528c0,-3.309 2.691,-6 6,-6c3.309,0 6,2.691 6,6c0,2.482 -1.514,4.616 -3.667,5.528z"></path>
                </g>
              </g>
            </svg>
            <h1 className=" text-3xl text-color-font font-mono tracking-tight font-semibold">
              Podcasts
            </h1>
          </div>
          <ul className="mt-6">
            <li className="flex w-full justify-between text-slate-200 hover:text-slate-50 cursor-pointer items-center mb-6 ml-2">
              <div className="flex items-center">
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
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 hidden"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>

                <span className=" font-semibold text-sm  ml-2">Home</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed inset-y-0 left-0 z-10 w-64 bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        id="mobile-nav"
      >
        <button
          className="h-10 w-10 md:hidden bg-slate-900 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
          id="mobile-toggler"
          onClick={() => setIsOpen((flag) => !flag)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-adjustments"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#FFFFFF"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx={6} cy={10} r={2} />
            <line x1={6} y1={4} x2={6} y2={8} />
            <line x1={6} y1={12} x2={6} y2={20} />
            <circle cx={12} cy={16} r={2} />
            <line x1={12} y1={4} x2={12} y2={14} />
            <line x1={12} y1={18} x2={12} y2={20} />
            <circle cx={18} cy={7} r={2} />
            <line x1={18} y1={4} x2={18} y2={5} />
            <line x1={18} y1={9} x2={18} y2={20} />
          </svg>
        </button>
        <div className="px-6 py-6">
          <div className="w-full flex gap-1 justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="384"
              height="384"
              viewBox="0,0,256,256"
              className=" h-16 w-16"
            >
              <g
                fill="#f4eee0"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M18,3h-12c-1.654,0 -3,1.346 -3,3v12c0,1.654 1.346,3 3,3h12c1.654,0 3,-1.346 3,-3v-12c0,-1.654 -1.346,-3 -3,-3zM13.005,18.279c-0.18,0.518 -0.674,0.721 -1.005,0.721c-0.331,0 -0.825,-0.203 -1.005,-0.721c-0.18,-0.518 -0.495,-2.311 -0.495,-3.513c0,-1.202 1.064,-1.266 1.5,-1.266c0.436,0 1.5,0.065 1.5,1.266c0,1.202 -0.316,2.995 -0.495,3.513zM10.75,11.25c0,-0.69 0.56,-1.25 1.25,-1.25c0.69,0 1.25,0.56 1.25,1.25c0,0.69 -0.56,1.25 -1.25,1.25c-0.69,0 -1.25,-0.56 -1.25,-1.25zM12,8.5c-1.654,0 -3,1.346 -3,3c0,0.804 0.322,1.532 0.839,2.071c-0.177,0.296 -0.282,0.647 -0.316,1.045c-0.921,-0.734 -1.523,-1.85 -1.523,-3.116c0,-2.206 1.794,-4 4,-4c2.206,0 4,1.794 4,4c0,1.266 -0.602,2.382 -1.522,3.116c-0.034,-0.397 -0.14,-0.749 -0.316,-1.045c0.516,-0.539 0.838,-1.267 0.838,-2.071c0,-1.654 -1.346,-3 -3,-3zM14.333,17.028c0.052,-0.396 0.096,-0.804 0.125,-1.201c1.51,-0.862 2.542,-2.468 2.542,-4.327c0,-2.757 -2.243,-5 -5,-5c-2.757,0 -5,2.243 -5,5c0,1.859 1.032,3.465 2.542,4.327c0.03,0.397 0.073,0.805 0.125,1.201c-2.153,-0.912 -3.667,-3.046 -3.667,-5.528c0,-3.309 2.691,-6 6,-6c3.309,0 6,2.691 6,6c0,2.482 -1.514,4.616 -3.667,5.528z"></path>
                </g>
              </g>
            </svg>
            <h1 className=" text-3xl text-color-font font-mono tracking-tight font-semibold">
              Podcasts
            </h1>
          </div>
          <ul className="mt-6">
            <li className="flex w-full justify-between text-slate-200 hover:text-slate-50 cursor-pointer items-center mb-6 ml-2">
              <div className="flex items-center">
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
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 hidden"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>

                <span className=" font-semibold text-sm  ml-2">Home</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Sidebar ends */}
      {/* Remove class [ h-64 ] when adding a card block */}
    </div>
  );
}
