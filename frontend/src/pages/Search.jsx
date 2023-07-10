import React, { useEffect, useState } from "react";
import SearchBar from "../components/search/SearchBar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPodcasts } from "../features/podcastSlice";
import CategoryCard from "../components/search/CategoryCard";
import ListCard from "../components/podcasts/ListCard";

export default function Search() {
  const dispatch = useDispatch();
  const { podcasts } = useSelector((state) => state.podcasts);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [fiteredPodcasts, setFilteredPodcasts] = useState([])
  const [searchItem, setSearchItem] = useState("")
  const [searchType, setSearchType] = useState("")

  useEffect(() => {
    dispatch(getAllPodcasts());
  }, []);

  useEffect(() => {
    let filterItems = podcasts
    if(searchItem){
      filterItems = filterItems?.filter(pod => pod?.name?.toLowerCase().includes(searchItem?.toLowerCase()) || pod?.speaker?.toLowerCase().includes(searchItem?.toLowerCase()))
    }
    if(searchType){
      filterItems = filterItems?.filter(pod => pod.type === searchType)
    }
    setFilteredPodcasts(filterItems)
  }, [searchItem, searchType])
  
  return (
    <div className=" flex flex-col w-full h-full px-8 pt-8">
      <div className="grid gap-2">
      <div className="grid md:grid-cols-2 mb-2">
        <SearchBar searchItem={searchItem} setSearchItem={setSearchItem}/>
        {/* <Profile /> */}
        <Link
          to={"/signup"}
          className={
            "px-5 place-self-end py-3 hidden md:block w-max font-mono text-md font-semibold text-color-dark bg-color-font shadow rounded-full" +
            ` ${isAuthenticated ? "hidden" : "block"}`
          }
        >
          Get Started
        </Link>
      </div>
      {searchItem && <div className='px-2 inline-flex flex-wrap items-center justify-start gap-2'>
            <div
              onClick={() => setSearchType('')}
              className={`inline-flex items-center gap-1.5 py-1.5 cursor-pointer px-3 rounded-full text-xs font-medium outline-none ${searchType === '' ? 'bg-color-font text-color-card' : 'bg-color-card text-color-font'}`}
            >
              All
            </div>
            <div
              onClick={() => setSearchType('audio')}
              className={`inline-flex items-center gap-1.5 py-1.5 cursor-pointer px-3 rounded-full text-xs font-medium outline-none ${searchType === 'audio' ? 'bg-color-font text-color-card' : 'bg-color-card text-color-font'}`}
            >
              Audio
            </div>
            <div
              onClick={() => setSearchType('video')}
              className={`inline-flex items-center gap-1.5 py-1.5 cursor-pointer px-3 rounded-full text-xs font-medium focus:outline-none ${searchType === 'video' ? 'bg-color-font text-color-card' : 'bg-color-card text-color-font'}`}
            >
              Video
            </div>
          </div>}
      </div>
      {!searchItem ? <div className="mt-4 px-1">
        <h2 className="mb-4 text-sm md:text-base font-semibold">Browse all</h2>
        <CategoryCard />
      </div> :
      <div className="grid overflow-auto mt-6 px-1 pb-8 md:grid-cols-2 gap-4">
        {fiteredPodcasts?.map((podcast) => (
          <ListCard
            key={podcast._id}
            podcast={podcast}
          />
        ))}
      </div>}
    </div>
  );
}
