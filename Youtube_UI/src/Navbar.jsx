import React from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { GoVideo } from "react-icons/go";
import { FaYoutube } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return ( 
    <nav>
      <div className="flex flex-col h-screen w-40 gap-10">
        <Link to='/' className="flex flex-col gap-1 px-7 hover:bg-gray-200">
        <IoMdHome size={25}/>
        <span className="p-1">홈</span>
        </Link>
        <Link to='shorts' className="flex flex-col gap-2 px-7 hover:bg-gray-200">
        <GoVideo size={25}/>
        <span>Shorts</span>
        </Link>
        <Link to='subscribe' className="flex flex-col gap-2 px-7 hover:bg-gray-200">
        <FaYoutube size={25} />
        <span>구독</span>
        </Link>
        <Link to='mypages' className="flex flex-col gap-2 px-7 hover:bg-gray-200">
        <CgProfile size={25}/>
        <span>내 페이지</span>
        </Link>
   </div>
    </nav>
  );
};

export default Navbar;