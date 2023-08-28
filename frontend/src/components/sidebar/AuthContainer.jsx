import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/userSlice";
import { favouriteImg, myPodcastsImg } from "../../assets";

export default function AuthContainer({ current, setCurrent }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const handleClick = (path) => {
    setCurrent(path);
    navigate(path);
  };
  return (
    <div className="relative h-full">
      {isAuthenticated ? (
        <div className=" flex flex-col justify-between h-full">
          <ul className="pt-10">
            <li
              onClick={() => handleClick("podcasts")}
              className="flex w-full justify-between text-slate-300 hover:text-color-font cursor-pointer items-center mb-6 ml-2"
            >
              <div className="flex items-center gap-2">
                <img
                  src={myPodcastsImg}
                  className="h-7 bg-color-bg rounded-md p-0.5 w-7"
                  alt=""
                />

                <span
                  className={`text-sm ${
                    current === "podcasts"
                      ? "font-bold text-color-font"
                      : "font-semibold"
                  }`}
                >
                  My Podcasts
                </span>
              </div>
            </li>
            <li
              onClick={() => handleClick("favourites")}
              className="flex w-full justify-between text-slate-300 hover:text-color-font cursor-pointer items-center mb-6 ml-2"
            >
              <div className="flex items-center gap-2">
                <img src={favouriteImg} className=" h-6 w-7" />
                <span
                  className={`text-sm ${
                    current === "favourites"
                      ? "font-bold text-color-font"
                      : "font-semibold"
                  }`}
                >
                  Favourites
                </span>
              </div>
            </li>
          </ul>
          <ul>
            <li
              onClick={() => handleClick("profile")}
              className="flex w-full justify-between text-slate-300 hover:text-color-font cursor-pointer items-center mb-6 ml-2"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${current !== "profile" ? "" : "hidden"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 h-6 ${current === "profile" ? "" : "hidden"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>

                <span
                  className={`text-sm ${
                    current === "profile"
                      ? "font-bold text-color-font"
                      : "font-semibold"
                  }`}
                >
                  My Profile
                </span>
              </div>
            </li>
            <li
              onClick={() => handleClick("settings")}
              className="flex w-full justify-between text-slate-300 hover:text-color-font cursor-pointer items-center mb-6 ml-2"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${
                    current !== "settings" ? "" : "hidden"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-6 h-6 ${
                    current === "settings" ? "" : "hidden"
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <span
                  className={`text-sm ${
                    current === "settings"
                      ? "font-bold text-color-font"
                      : "font-semibold"
                  }`}
                >
                  Settings
                </span>
              </div>
            </li>
            <li
              onClick={() => dispatch(logout())}
              className="flex w-full justify-between hover:text-color-font text-slate-300 cursor-pointer items-center mb-6 ml-2"
            >
              <div className="flex items-center gap-2">
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
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>

                <span
                  className={`text-sm ${
                    current === "logout"
                      ? "font-bold text-color-font"
                      : "font-semibold"
                  }`}
                >
                  Logout
                </span>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex flex-col h-full gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 md:px-5 md:py-3 hover:translate-x-1 transition-all bg-color-font text-color-dark font-mono text-sm font-semibold rounded-full"
          >
            Log in
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 md:px-5 md:py-3 hover:translate-x-1 transition-all bg-color-card text-color-font font-mono text-sm font-semibold rounded-full"
          >
            Sign up
          </button>
        </div>
      )}
    </div>
  );
}
