import React from "react";

const Loader2 = () => {
  return (
    <div className="flex  absolute top-[45%]  right-[45%] ">
      <div className="w-20 h-20 bg-transparent border-4 border-transparent border-t-blue-500 border-r-blue-500 flex justify-center items-center rounded-full animate-spin duration-700">
        <div className="w-16 h-16 bg-transparent border-4 border-transparent border-t-blue-400 rounded-full border-r-blue-400 animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader2;
