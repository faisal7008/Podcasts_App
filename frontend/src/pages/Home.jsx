import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/to be deleted/Main";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    // <div className='w-full flex'>
    //     {/* <div className=' w-1/6 p-2 border-r-2 h-screen'><Sidebar/></div>
    //     <div className=' w-5/6 p-2'><Main/></div> */}
    // </div>
    <div className="flex h-screen flex-no-wrap">
      <Sidebar />
      {/* <Main Component={}/> */}
      <Outlet />
    </div>
  );
}
