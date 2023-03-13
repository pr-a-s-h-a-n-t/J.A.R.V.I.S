import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import PlayGround from "./components/PlayGround/PlayGround";
function App() {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <PlayGround />
    </div>
  );
}

export default App;
