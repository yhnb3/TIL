import "./App.css";
import Extraction from "./components/2-4 props/Extraction/Extraction";
import Composition from "./components/2-4 props/Composition";
import ClassComponent from "./components/2-6 lifeCycle/ClassComponent";
import FunctionComponent from "./components/2-5 state/FunctionComponent";
import Condition from "./components/2-7 condition rendering/Condtion";

function App() {
  return (
    <div className="App">
      <Condition />
      <ClassComponent />
      {/* <FunctionComponent />
      <Composition />
      <Extraction /> */}
    </div>
  );
}

export default App;
