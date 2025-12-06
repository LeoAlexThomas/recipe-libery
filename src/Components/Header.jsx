import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="w-full bg-accent shadow-md">
      <div className="p-4 w-full max-w-[1440px] mx-auto">
        <Logo />
      </div>
    </div>
  );
};

export default Header;
