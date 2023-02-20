import React from "react";
import PlayGroundList from "./PlayGroundList";

function Settings() {
  return (
    <div className="bg-zinc-500 w-full flex flex-col p-5">
      <div className="bg-zinc-500 w-full flex justify-between    ">
        <div>
          <h2 className="text-xl text-cyan-50">My Playground</h2>
        </div>
        <div>
          <button
            className=" rounded-lg  w-[120px] h-[40px] font-semibold justify-center align-middle
         "
          >
            <span>+</span> <span>New Folder</span>
          </button>
        </div>
      </div>
      <hr />
      <div className=" mt-10">
        <PlayGroundList />
      </div>
    </div>
  );
}

export default Settings;
