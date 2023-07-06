import React from "react";
import Link from "next/link";

const sidebar = () => {
  return (
    <div className="text-slate-100 flex-col border-r mt-[5rem] pr-5 pl-5  fixed left-0 bg-slate-900 h-screen ">
      <div className="flex ml-3 py-8">
        <div className="flex-col text-slate-100">
          <div className="items-center cursor-pointer px-2  mb-1 text-sm font-medium  hover:underline">
            Streamsss
          </div>

          <div className="px-2 text-xs leading-none text-gray-400">
            Classic software company
          </div>
        </div>
      </div>
      <div className="border border-gray-300  mx-3"></div>

      <div className=" overflow-y-auto h-full">
        <div className="flex-col px-3">
          <Link
            href="./dashboard"
            className="uppercase flex hover:bg-orange-500 ml-2 py-4 mt-2  mb-1 hover:text-white font-medium text-gray-100 rounded p-2 text-sm group transition-colors items-center"
          >
            Dashboard
          </Link>
          <Link
            href="./"
            className=" uppercase flex hover:bg-orange-500 ml-2 py-4 mt-2 mb-1 hover:text-white font-medium text-gray-100 rounded p-2 text-sm group transition-colors items-center"
          >
            Profile
          </Link>
          <Link
            href="./"
            className="uppercase flex hover:bg-orange-500 ml-2 py-4 mt-2 mb-1 hover:text-white font-medium text-gray-100 rounded p-2 text-sm group transition-colors items-center"
          >
            Admin
          </Link>

          <div className="border border-gray-300 mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
