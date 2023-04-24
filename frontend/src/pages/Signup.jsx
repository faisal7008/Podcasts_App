import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status, error, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    dispatch(signup({ name, email, password }));
  };
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
          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <label className="text-sm font-medium leading-none text-gray-800">
                Fullname
              </label>
              <input
                required
                aria-label="enter fullname"
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6">
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                required
                aria-label="enter email adress"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6">
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  required
                  aria-label="enter Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                aria-label="signup"
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-color-bg text-sm font-semibold leading-none text-white focus:outline-none bg-color-bg border rounded hover:bg-color-card py-4 w-full"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
