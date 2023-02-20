import React, { useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOffIcon from "@mui/icons-material/EditOff";

function PlayGroundList() {
  const [playGroundList, setPayGroundList] = useState([
    {
      id: 0,
      name: "Play Ground ",
    },
    {
      id: 1,
      name: "Play Ground ",
    },
    {
      id: 2,
      name: "Play Ground ",
    },
    {
      id: 3,
      name: "Play Ground ",
    },
    {
      id: 4,
      name: "Play Ground ",
    },
    {
      id: 5,
      name: "Play Ground ",
    },
  ]);

  // const deletePlaygound = (id) => {
  //     console.log(id,"delete")
  // const filteredPlaygoundList = playGroundList.filter((playGroundList) => {
  //     return playGroundList.id != id;
  // } )
  // console.log(filteredPlaygoundList)
  // setPayGroundList(filteredPlaygoundList);

  // }

  return (
    <div>
      {playGroundList
        ? playGroundList.map((playGroundList, i) => {
            return (
              <>
                <div
                  className="flex justify-between m-2 border-4 border-red-500 "
                  key={playGroundList.id}
                >
                  <div className="flex gap-1  align-middle">
                    <span className="text-orange-200">
                      <FileCopyIcon />
                    </span>
                    {playGroundList.name}
                  </div>
                  <div className="flex justify-between align-middle my-auto gap-3 ">
                    <div className="text-red-600">
                      <DeleteOutlineIcon onClick={() => {}} />
                    </div>
                    <div className="text-amber-200">
                      <EditOffIcon />
                    </div>
                    <div>
                      {" "}
                      <h6 className="text-xl text-gray-50 ">
                        <span className="text-xl text-green-500">+</span> New
                        Playground
                      </h6>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            );
          })
        : ""}
    </div>
  );
}

export default PlayGroundList;
