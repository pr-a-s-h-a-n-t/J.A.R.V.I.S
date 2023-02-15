import EditorScreen from './components/EditorScreen';
import Settings from './components/Settings';
import logo from './logo.svg';
 

function App() {
  return (
    <div className="border-2 flex h-screen ">
        <EditorScreen />
        <Settings />
    </div>
  );
}

export default App;
