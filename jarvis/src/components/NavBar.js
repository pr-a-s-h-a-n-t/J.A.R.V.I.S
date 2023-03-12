import React from "react";
import logo from "../../src/assets/navLogo.png";  


function Navbar({ isFullScreen }) {
  return (
    <div
      className={`relative ${
        isFullScreen ? "h-0" : "h-12"
      }  flex justify-start items-center gap-4 px-4`}
    >
    <div className="  flex justify-start items-center">

      <img className="w-10" src={logo}   alt="logo" />
      <div class="text-5xl font-mono font-extrabold   text-blue-300 drop-shadow-lg mx-2">Jarvis</div>
    </div>
    </div>
  );
}

export default Navbar;