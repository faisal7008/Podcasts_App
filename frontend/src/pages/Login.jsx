import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/userSlice";
import ErrorContainer from "../components/handlers/ErrorContainer";
import Loader from "../components/handlers/Loader";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    dispatch(login({ email, password }));
  };

  return (
    <div className="h-full bg-gradient-to-tl from-color-dark to-color-bg w-full py-16 px-4">
      {/* <ErrorContainer /> */}
      <Link
        to="/"
        className=" absolute bg-color-font rounded-full p-1 top-4 left-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={2}
          fill="currentColor"
          className="w-4 h-4 text-color-dark"
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
            className="w-12 h-12 lg:h-16 lg:w-16"
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
          <h1 className="text-2xl md:text-3xl text-color-font font-mono tracking-tight font-semibold">
            Podcasts
          </h1>
        </div>
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-lg md:text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>
          <p className="text-xs md:text-sm mt-3 font-medium leading-none text-gray-500">
            Don't have an account?{" "}
            <span
              tabIndex={0}
              aria-label="Sign up here"
              className="text-xs md:text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
            >
              {" "}
              <Link to={"/signup"}> Sign up here </Link>
            </span>
          </p>
          <button
            aria-label="Continue with google"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 bg-color-font border rounded-lg border-gray-700 flex justify-center items-center w-full mt-6"
          >
            <svg
              width={19}
              height={20}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <p className="text-sm md:text-base font-medium ml-4 text-gray-700">
              Continue with Google
            </p>
          </button>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-sm md:text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-xs md:text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                required
                aria-label="enter email adress"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none text-xs md:text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6  w-full">
              <label className="text-xs md:text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  required
                  aria-label="enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="bg-gray-200 border focus:border-color-bg focus:ring-color-bg rounded focus:outline-none text-xs md:text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-color-bg text-sm font-semibold leading-none text-white focus:outline-none bg-color-bg border rounded hover:bg-color-card py-4 w-full"
              >
                {status === "loading" ? <Loader /> : <>Log in</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
