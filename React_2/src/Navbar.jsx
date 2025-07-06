import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
   <div className="flex flex-col h-screen w-64 bg-gray-100">
  <div className="p-4 text-lg font-bold">Logo</div>
  <nav>
    <ul className="space-y-2">
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-200">
          메뉴 1
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-200">
          메뉴 2
        </a>
      </li>
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-200">
          메뉴 3
        </a>
      </li>
    </ul>
  </nav>
</div>
  );
};

export default Navbar;