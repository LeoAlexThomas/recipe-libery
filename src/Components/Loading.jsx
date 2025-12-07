import React from "react";

const Loading = ({ showFullScreen, label }) => {
  return (
    <div
      className={`flex flex-col gap-6 justify-center items-center ${
        showFullScreen ? "h-screen top-1/2" : "h-36"
      }`}
    >
      <i className="fa-solid fa-spinner fa-spin-pulse text-accent fa-2xl"></i>
      <p className="text-lg font-medium text-center text-black">
        {label ?? "Loading"}
      </p>
    </div>
  );
};

export default Loading;
