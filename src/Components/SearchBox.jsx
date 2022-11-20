import React, { useState, useRef, useEffect } from "react";
import { IoSearchCircle } from "react-icons/io5";

const SearchBox = () => {
  const searchTool = useRef();
  // useEffect();
  const [search, setSearch] = useState(false);
  const handleSearch = (e) => {
    search ? setSearch(false) : setSearch(true);
  };
  useEffect(() => {
    const handler = (e) => {
      if (!searchTool.current.contains(e.target)) {
        setSearch(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <div className="">
      <div
        className={`${
          search
            ? "bg-[#37a4b9]  flex  w-fit py-6  absolute top-12 right-2  md:right-0 md:relative px-5 rounded-b-xl md:py-0 md:px-0   md:rounded-t-xl md:top-0  "
            : " "
        } `}
        ref={searchTool}
      >
        <div
          className={`w-fit p-1 bg-white rounded-xl ${
            search ? "hidden" : "flex"
          }`}
        >
          {" "}
          <IoSearchCircle
            htmlFor="search"
            className=" text-4xl font-bold cursor-pointer text-slate-600 transform translate hover:scale-110"
            onClick={handleSearch}
          />
        </div>
        <div
          className="flex rounded-lg  justify-center items-center  "
          id="hello"
        >
          <form>
            {search ? (
              <input
                type="search"
                name="search"
                id="search"
                className="px-2 py-2  outline-none border-none rounded-lg "
                placeholder="search"
              />
            ) : null}
          </form>

          {search ? (
            <IoSearchCircle
              htmlFor="search"
              className=" text-[2.5rem] font-bold cursor-pointer transform translate hover:scale-125 text-[#fff]  "
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
