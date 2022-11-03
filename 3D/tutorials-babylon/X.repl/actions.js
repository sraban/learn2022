let registerActions = function(scene) {
  scene.actionManager = new BABYLON.ActionManager(scene);



  // Create an action. This action executes some function when the uesr has pressed a key
  let sphereAction = new BABYLON.ExecuteCodeAction(
    BABYLON.ActionManager.OnKeyUpTrigger,
    function(event) {
      if(event.sourceEvent.key === " ") {
        createSphere(scene);
      }
    }
  );
  scene.actionManager.registerAction(sphereAction);



  let cone = createCone(scene);
  cone.actionManager = new BABYLON.ActionManager(scene);
  // Add action for the cone
  let coneAction = new BABYLON.ExecuteCodeAction(
    BABYLON.ActionManager.OnPointerOverTrigger,
    function(event) {
      changeConeColor(cone);
    }
  );
  cone.actionManager.registerAction(coneAction); 
};



function createCone(scene) {
  // Create the cylinder
  let cone = new BABYLON.MeshBuilder.CreateCylinder("cone", {
    height: 5,
    diameterBottom: 3,
    diameterTop: 0
  });
  cone.position.x = -3;
  cone.position.z = -3;
  cone.position.y = 1;

  // Create a physics imposter and make sure collisiosn are enabled (so the spheres bounce off of it)
  new BABYLON.PhysicsImpostor(
    cone,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
        mass: 1000,
        friction: 3, 
        restitution: .7
    },
    scene
  );
  cone.collisionsEnabled = true;
  cone.checkCollisions = true;

  // Create a material and set it to green
  let coneMaterial = new BABYLON.StandardMaterial(scene);
  coneMaterial.diffuseColor = new BABYLON.Color3(105 / 256, 256 / 256, 124 / 256);
  cone.material = coneMaterial;

  return cone;
}



function changeConeColor(cylinder) {
  let r = Math.floor(Math.random() * 256) + 1;
  let g = Math.floor(Math.random() * 256) + 1;
  let b = Math.floor(Math.random() * 256) + 1;
  cylinder.material.diffuseColor = new BABYLON.Color3(r / 256, g / 256, b / 256);
}



function createSphere(scene) {
  // Create Sphere Mesh
  let mySphere = BABYLON.MeshBuilder.CreateSphere("sphere", {
    diameter: 1
  }, scene);

  // Give the sphere mesh a height
  mySphere.position.y = 2;

  // Create a Pysics Imposter around the Sphere, and enable collisions so it interacts with other parts of the scene
  let mySpherePhysicsImposter = new BABYLON.PhysicsImpostor(
    mySphere,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 0.3, 
      friction: 0.1, 
      restitution: .85
    },
    scene
  );
  mySphere.collisionsEnabled = true;
  mySphere.checkCollisions = true;
}

export { registerActions };

