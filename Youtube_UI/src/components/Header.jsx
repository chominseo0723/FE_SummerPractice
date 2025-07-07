import React from 'react';
import { CiSearch, CiMenuBurger } from 'react-icons/ci';
import { FaYoutube } from "react-icons/fa";
const Header = () => (
  <div className="flex items-center w-full p-4">
    <CiMenuBurger size={25} className="text-gray-700 ml-3" />

    <div className="flex items-center gap-3 mx-auto">
      <span className="flex flex-row font-bold gap-2 text-3xl italic">
        <FaYoutube size={40} className='fill-red-500'/>
        YouTube
        </span>
      <div className="flex items-center w-[700px] h-10 border rounded-3xl overflow-hidden">
        <input
          type="text"
          placeholder="검색"
          className="flex-1 px-5 outline-none text-gray-700"
        />
        <span className="flex items-center justify-center h-full w-14 bg-gray-200 border-l">
          <CiSearch size={24} className="text-gray-500" />
        </span>
      </div>
    </div>
  </div>
);

export default Header;
