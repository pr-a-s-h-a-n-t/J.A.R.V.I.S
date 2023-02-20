import LeftScreen from "./components/EditorScreen";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="border-2 flex w-full  h-screen  ">
      <LeftScreen />

      <Settings />
    </div>
  );
}

export default App;
