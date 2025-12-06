import React from "react";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <img
        src="/images/recipe-icon.png"
        alt="Logo"
        className="rounded-full w-14 h-14"
      />
      <h4 className="font-Title text-3xl font-bold text-white">
        Recipe Library
      </h4>
    </div>
  );
};

export default Logo;
