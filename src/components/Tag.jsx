import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const Tag = () => {
  const [tag, settag] = useState("bheem");

  const{gif,loading,fetchgif} = useGif(tag);
 
  function clickHandler() {
    fetchgif(tag);
  }

  return (
    <div className="w-1/2 mb-[20px] bg-green-300 rounded-lg border border-black flex flex-col items-center gap-y-6 mt-[20px]">
      <h1 className="mt-[20px] text-2xl underline font-bold uppercase">
        {" "}
        A Random gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} alt="gif" width="450px" />}

      <input
        type="text"
        onChange={(event) => settag(event.target.value)}
        className="w-10/12 mb-[10px] bg-white rounded-lg py-2 px-10 text-center border border-black"
        value={tag}
      />
      <button
        onClick={clickHandler}
        className="w-10/12 mb-[20px] bg-yellow-300 rounded-lg py-2 px-10 cursor-pointer"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
