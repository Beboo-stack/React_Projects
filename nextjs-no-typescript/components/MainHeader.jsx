import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white flex justify-between items-center h-12 px-4 mb-4">
      <div>Brand</div>
      <FaBars className="cursor-pointer"/>
    </div>
  );
};

export default Header;
