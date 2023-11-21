import React from "react";

const Spinner = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center w-full min-h-screen ">
      <div className="absolute z-50 spinner"></div>
    </div>
  );
};

export default Spinner;
