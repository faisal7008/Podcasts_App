import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  // const [sidebar, setsidebar] = useState();
  return (
    <div className="h-full bg-gradient-to-tl from-color-dark to-color-bg w-full py-16 px-4">
      <Link
        to="/"
        className=" absolute bg-color-font rounded-full p-2 top-4 left-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
      <div className="flex flex-col gap-4 items-center justify-center">
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
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10">
          <p
            tabIndex={0}
            aria-label="Create your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Create your account
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Already have an account?{" "}
            <span
              tabIndex={0}
              aria-label="Sign up here"
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
            >
              {" "}
              <Link to={"/login"}> Login here </Link>
            </span>
          </p>
          <div className="mt-6">
            <label className="text-sm font-medium leading-none text-gray-800">
              Username
            </label>
            <input
              aria-label="enter usename"
              type="email"
              className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6">
            <label className="text-sm font-medium leading-none text-gray-800">
              Email
            </label>
            <input
              aria-label="enter email adress"
              type="email"
              className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <lable className="text-sm font-medium leading-none text-gray-800">
              Password
            </lable>
            <div className="relative flex items-center justify-center">
              <input
                aria-label="enter Password"
                type="password"
                className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
                    fill="#71717A"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              aria-label="login"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-color-bg text-sm font-semibold leading-none text-white focus:outline-none bg-color-bg border rounded hover:bg-color-card py-4 w-full"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
