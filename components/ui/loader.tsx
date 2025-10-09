import React from "react";

const Loader = () => {
  return (
    <div
      data-testid="loader-container"
      className="flex items-center justify-center w-full h-full"
    >
      <div
        data-testid="loader-spinner"
        className="w-16 h-16 border-4 border-t-primary border-r-transparent border-b-primary border-l-transparent rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loader;
