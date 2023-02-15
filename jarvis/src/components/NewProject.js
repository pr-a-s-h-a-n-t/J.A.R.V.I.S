import React from "react";
import UFO from "../assets/ufo.jpg";
function NewProject() {
  return (
    <div
      className="flex 
   flex-col m-0 
       justify-center"
    >
      <img src={UFO} width="200px" height="200px" alt="" />

      <h2>Code Editor</h2>
      <h6>Code, Compile, Debug</h6>

      <button>start New Project</button>
    </div>
  );
}

export default NewProject;
