import React from 'react'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="flex items-center w-[700px] h-10 border rounded-3xl overflow-hidden">
        <input type="text"
          placeholder="검색"
          className="flex-1 px-5 outline-none text-gray-700"
        />
        <span className="flex items-center justify-center h-full w-14
                       bg-gray-100 border-l">
          <CiSearch size={24} className="text-gray-500" />
        </span>
      </div>
    </div>
  );
};

export default Header;
