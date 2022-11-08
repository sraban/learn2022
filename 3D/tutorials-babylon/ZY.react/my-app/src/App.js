import './App.css';
import Animations from './babylon/basic/Animation'
import TransformNode from './babylon/basic/TransformNode'
import Viewport from './babylon/basic/Viewport'
import ToggleScene from './babylon/basic/ToggleScene'
import SnippetMaterial from './babylon/basic/SnippetMaterial'
import Skybox3D from './babylon/basic/Skybox3D'
import PauseRender from './babylon/basic/PauseRender'
// import Instancez from './babylon/basic/Instances'
import GizmoManager from './babylon/basic/GizmoManager'
import Gizmo from './babylon/basic/Gizmo'
import FromInstance from './babylon/basic/FromInstance'
// import ExtrudeShapesPlusCSG from './babylon/basic/ExtrudeShapesPlusCSG'
import EngineView from './babylon/basic/EngineView'
import EdgesRendering from './babylon/basic/EdgesRendering'
import DynamicTerrain from './babylon/basic/DynamicTerrain'
// import CustomMeshes from './babylon/basic/CustomMeshes'
import CreatePortal from './babylon/basic/CreatePortal'
import BridgedContext from './babylon/basic/BridgedContext'
import DefaultPlayground from './babylon/basic/DefaultPlayground'


import ModelLoaderStory from './babylon/model/ModelLoaderStory'
import LookAtStory from './babylon/model/LookAtStory'
import ModelStory from './babylon/model/ModelStory'


import UseClickEvent from './babylon/Hooks/UseClickEvent'

function App() {
  return (
    <div className="App">
      
      <Animations/>
      <hr/>
      <TransformNode></TransformNode>

      <hr/>
      <ToggleScene/>
      <hr/>
      <SnippetMaterial/>      
      <hr/>
      <Skybox3D/>
      <hr/>
      <PauseRender/>
      <hr/>
      <GizmoManager/>
      <hr/>
      <Gizmo/>
      <hr/>
      <FromInstance/>
      <hr/>
      <EdgesRendering/>
      
      
      <hr/>
      <CreatePortal/>
      {/* <hr/>
      <BridgedContext/>
      <hr/>
      <Viewport/>
      <hr/>
      <EngineView/>
      <hr/>
      <DefaultPlayground/>
      <hr/>
      <DynamicTerrain/>
      <hr/>
      <CustomMeshes/>
      <hr/>
      <ExtrudeShapesPlusCSG/>
      <hr/>
      <Instances/> */}

      <ModelLoaderStory/>

      <hr/>

      <LookAtStory/>
      <hr/>

      <ModelStory/>
<hr/>
<UseClickEvent/>

    </div>
  );
}

export default App;
