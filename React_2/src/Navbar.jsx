import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav>
      <div className="flex flex-col h-screen w-40 gap-10">
        <Link to='/' className="block px-7 hover:bg-gray-200">홈</Link>
        <Link to='shorts' className="block px-7 hover:bg-gray-200">Shorts</Link>
        <Link to='subscribe' className="block px-7 hover:bg-gray-200">구독</Link>
        <Link to='mypages' className="block px-7 hover:bg-gray-200">내 페이지</Link>
   </div>
    </nav>
  );
};

export default Navbar;