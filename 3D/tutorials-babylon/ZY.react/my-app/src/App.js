import logo from './logo.svg';
import './App.css';
import Animations from './babylon/basic/Animation'
import BridgedContext from './babylon/basic/BridgedContext';
import CustomMeshes from './babylon/basic/CustomMesh';
import ExtrudeShapesPlusCSG from './babylon/basic/ExtrudeShapesPlusCSG';


function App() {
  return (
    <div className="App">

      <ExtrudeShapesPlusCSG/>

      {/* <Animations/>
      <BridgedContext/> */}

      

      {/* <ToggleScene/> */}
    </div>
  );
}

export default App;
