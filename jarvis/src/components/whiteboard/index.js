import React from 'react'

function WhiteBoard() {
  return (
    <div>
        <button 
        style={{
            background: "linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))",
            border: "none",
            color: "hsl(65deg 100% 49%)",
        }}
        className="font-normal rounded-full p-2  ">White Board</button>
    </div>
  )
}

export default WhiteBoard;