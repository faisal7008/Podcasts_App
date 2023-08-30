import React, { useEffect, useState } from 'react';
import SearchBar from '../components/search/SearchBar';
import { useSelector } from 'react-redux';
import CategoryCard from '../components/search/CategoryCard';
import ListCard from '../components/podcasts/ListCard';
import { emptyLogo } from '../assets';

export default function Search() {
  const { podcasts } = useSelector((state) => state.podcasts);
  const [fiteredPodcasts, setFilteredPodcasts] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchType, setSearchType] = useState('');

  useEffect(() => {
    let filterItems = podcasts;
    if (searchItem) {
      filterItems = filterItems?.filter(
        (pod) =>
          pod?.name?.toLowerCase().includes(searchItem?.toLowerCase()) ||
          pod?.speaker?.toLowerCase().includes(searchItem?.toLowerCase()),
      );
    }
    if (searchType) {
      filterItems = filterItems?.filter((pod) => pod.type === searchType);
    }
    setFilteredPodcasts(filterItems);
  }, [searchItem, searchType]);

  return (
    <div className=' flex flex-col w-full min-h-full p-4 md:p-7'>
      <div className='grid gap-2'>
        <div className='grid md:grid-cols-2 mb-2'>
          <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
        </div>
        {searchItem && (
          <div className='px-2 inline-flex flex-wrap items-center justify-start gap-2'>
            <div
              onClick={() => setSearchType('')}
              className={`inline-flex items-center gap-1.5 py-1.5 cursor-pointer px-3 rounded-full text-xs font-medium outline-none ${
                searchType === ''
                  ? 'bg-color-font text-color-card'
                  : 'bg-color-card text-color-font'
              }`}
            >
              All
            </div>
            <div
              onClick={() => setSearchType('audio')}
              className={`inline-flex items-center gap-1.5 py-1.5 cursor-pointer px-3 rounded-full text-xs font-medium outline-none ${
                searchType === 'audio'
                  ? 'bg-color-font text-color-card'
                  : 'bg-color-card text-color-font'
              }`}
            >
              Audio
            </div>
            <div
              onClick={() => setSearchType('video')}
              className={`inline-flex items-center gap-1.5 py-1.5 cursor-pointer px-3 rounded-full text-xs font-medium focus:outline-none ${
                searchType === 'video'
                  ? 'bg-color-font text-color-card'
                  : 'bg-color-card text-color-font'
              }`}
            >
              Video
            </div>
          </div>
        )}
      </div>
      {!searchItem ? (
        <div className='mt-4 px-1'>
          <h2 className='mb-4 text-sm md:text-base tracking-wide text-color-font font-semibold'>
            Browse all
          </h2>
          <CategoryCard />
        </div>
      ) : (
        <>
          <div className='grid overflow-auto mt-6 px-1 pb-8 md:grid-cols-2 gap-4'>
            {fiteredPodcasts?.map((podcast) => (
              <ListCard key={podcast._id} podcast={podcast} />
            ))}
          </div>
          {fiteredPodcasts?.length === 0 && (
            <div className='h-full w-full flex justify-center items-center'>
              <img src={emptyLogo} className='h-60' />
            </div>
          )}
        </>
      )}
    </div>
  );
}
