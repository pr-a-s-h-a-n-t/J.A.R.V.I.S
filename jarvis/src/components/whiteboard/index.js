import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
function WhiteBoard() {
    const notify = () => toast('Start Drawing the magic.');
  return (
    <div>
        <button onClick={notify}
        style={{
            background: "linear-gradient(to right, rgb(182, 244, 146), rgb(156 81 31))",
            border: "none",
            color: "hsl(65deg 100% 49%)",
        }}
        className="font-normal rounded-full p-2  ">White Board</button>
    </div>
  )
}

export default WhiteBoard;