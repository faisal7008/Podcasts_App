import React from 'react';
import { loaderImg } from '../../assets';

export default function PodcastLoader() {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <img src={loaderImg} alt="loader" className="w-[100px] h-[100px] object-contain"/>
      <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">Getting your podcast ready <br /> Please wait...</p>
    </div>
  );
}
