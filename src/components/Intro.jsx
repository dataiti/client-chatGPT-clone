import React from "react";

const Intro = ({ className = "", children = "" }) => {
  return (
    <p
      className={`bg-[#40414f] hover:bg-[#202123] transition-all text-sm text-white p-3 rounded-md w-[231px] text-center ${className}`}
    >
      {children}
    </p>
  );
};

export default Intro;
