import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-100">
      <Link to="/home" className="mr-4">
        Home
      </Link>
      <Link to="/info" className="mr-4">
        Info
      </Link>
      <Link to="/movies">영화 목록</Link>
    </nav>
  );
};

export default Navbar;