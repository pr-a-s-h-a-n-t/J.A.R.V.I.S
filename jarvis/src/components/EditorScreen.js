import React from "react";
import NewProject from "./NewProject";

function EditorScreen() {
  return (
    <div
      className="h-screen 
    flex   justify-center 
                items-center bg-[#2D033B]  text-emerald-50 w-[1/3] "
    >
      <div
        className="p-[30px] w-52 m-[auto]   h-36 justify-center flex flex-col  rounded-lg text-center
           bg-[#beca13fb]
      "
      >
        <h1 className="m-1 text-3xl">Code Editor</h1>
        <h5 className="m-2">Code, Compile, Debug</h5>
        <button
          class="rounded-lg  w-[200px] h-[40px] font-semibold justify-center align-middle
         "
        >
          <span className="text-xl ">+</span>{" "}
          <span className=" ">Create New Playground</span>
        </button>
      </div>
    </div>
  );
}

export default EditorScreen;
