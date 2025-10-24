import { useState } from "react";
import Tag from "./components/Tag";
import Random from "./components/Random";

function App() {

  return (
    <div className="w-full  flex flex-col background relative items-center">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold mx-auto">
      Random Gif
      </h1>
      <Random />
      <Tag />
    </div>
  );
}

export default App;
