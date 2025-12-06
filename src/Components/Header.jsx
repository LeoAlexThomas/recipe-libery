import React from "react";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSearchRecipe = () => {
    navigate("/searchRecipes");
  };

  return (
    <div className="w-full bg-accent shadow-md">
      <div className=" flex justify-between p-4 w-full max-w-[1440px] mx-auto items-center">
        <Logo />
        <div
          className="border-2 border-white rounded-lg w-10 h-10 content-center justify-items-center cursor-pointer"
          onClick={handleSearchRecipe}
        >
          <FaSearch className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
