import React from "react";
import Logo from "./Logo";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchRecipe = () => {
    navigate("/searchRecipes");
  };

  const handleHomeClicked = () => {
    navigate("/");
  };

  return (
    <nav className="w-full bg-accent shadow-md">
      <div className=" flex justify-between p-4 w-full max-w-[1440px] mx-auto items-center">
        <Logo />
        <ul className="flex gap-4 text-white text-base sm:text-lg">
          <li
            className={`cursor-pointer hover:underline hover:font-medium  ${
              location.pathname === "/" && "underline font-bold"
            }`}
            onClick={handleHomeClicked}
          >
            Home
          </li>
          <li
            className={`cursor-pointer hover:underline hover:font-medium ${
              location.pathname === "/searchRecipes" && "underline font-bold"
            } `}
            onClick={handleSearchRecipe}
          >
            Search
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
