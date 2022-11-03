import { showLoadingScreen, hideLoadingScreen } from "./loadingScreen.js";
import { createGameScene } from "./gameScene.js";
import { createPointerLock } from "./pointerLock.js";
import { registerActions } from "./actions.js";

window.addEventListener("DOMContentLoaded", start);

function start() {
  let canvas = document.getElementById("canvas");
  let engine = new BABYLON.Engine(canvas, true);

  showLoadingScreen(canvas, engine);

  let scene = createGameScene(canvas, engine);
  createPointerLock(scene);
  registerActions(scene);

  scene.afterRender = function() {
    hideLoadingScreen(engine)
  };

  engine.runRenderLoop(function() {
    scene.render();
  });

  window.addEventListener("resize", function() {
  	engine.resize()
  });
};