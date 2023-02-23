import LeftScreen from "../EditorScreen";
import Settings from "../Settings";

export default function LandingPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
     <div className="sm:w-full md:w-full w-5/12">

      <LeftScreen />
     </div>
     <div className="sm:w-full md:w-full w-7/12">
        
      <Settings />
      </div>
    </div>
  );
}
