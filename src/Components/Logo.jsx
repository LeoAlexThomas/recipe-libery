import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-2 items-center cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img
        src="/images/recipe-icon.png"
        alt="Logo"
        className="rounded-full w-10 h-10 sm:w-14 sm:h-14"
      />
      <h4 className="font-Title text-xl sm:text-3xl font-bold text-white">
        Recipe Library
      </h4>
    </div>
  );
};

export default Logo;
