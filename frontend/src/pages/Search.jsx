import React, { useEffect } from "react";
import SearchBar from "../components/search/SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPodcasts } from "../features/podcastSlice";

export default function Search() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAllPodcasts());
  }, []);
  return (
    <div className=" w-full h-full p-8">
      <div className="grid lg:grid-cols-2 mb-2">
        <SearchBar />
        {/* <Profile /> */}
        <Link
          to={"/signup"}
          className={
            "px-5 place-self-end py-3 w-max font-mono text-md font-semibold text-color-dark bg-color-font shadow rounded-full" +
            ` ${isAuthenticated ? "hidden" : "block"}`
          }
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
