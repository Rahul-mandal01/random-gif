import React from "react";
import Random from "./components/Random"
import Tag from "./components/Tag";

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center ">
          <h1 className=" absolute bg-white w-11/12 text-center 
        mt-[40px] ml-[15px] mr-[25px] text-xl p-4 font-bold rounded-2xl " >RANDOM GIFS</h1>

          <div className=" flex flex-col w-full items-center mt-[110px] ">
            <Random/>
            <Tag/>
          </div>
    </div>


  );
}

export default App;
