import React, { useEffect, useRef, useState } from 'react';
// import logo from "../assets/icons8-podcasts-96.png";
import SidebarContent from './SidebarContent';
import { useDispatch } from 'react-redux';
import { setHidePlayer } from '../../features/podcastSlice';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div onClick={() => dispatch(setHidePlayer(true))}>
      {/* Sidebar starts */}
      <div className='w-64 absolute sm:relative bg-slate-900 shadow lg:h-full hidden lg:flex flex-col'>
        <SidebarContent />
      </div>
      <div className={`z-20 ${isOpen ? '' : 'hidden'} fixed inset-0 bg-slate-700 bg-opacity-75 transition-opacity`}></div>
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 w-64 bg-slate-900 shadow-lg transform transition-all duration-300 ease-in-out z-[1500] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        id='mobile-nav'
      >
        <button
          className='h-8 w-6 lg:hidden bg-slate-900 absolute right-0 px-1 mt-16 -mr-5 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none'
          id='mobile-toggler'
          onClick={() => setIsOpen((flag) => !flag)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className={`w-6 h-6 ${isOpen && 'rotate-180'}`}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </button>
        <SidebarContent />
      </div>
      {/* Sidebar ends */}
    </div>
  );
}
