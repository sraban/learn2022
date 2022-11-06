<template>
  <div class="about">
      <Scene>
        <Camera v-model="myCamera"></Camera>
        <HemisphericLight :diffuse="color"></HemisphericLight>
        <Entity :position="[0, 0, 5]">
          <Animation property="rotation.x" :duration="5" :end="Math.PI * 2"></Animation>
          <Animation property="rotation.y" :duration="5" :end="Math.PI * 2"></Animation>
          <Animation property="rotation.z" :duration="5" :end="Math.PI * 2"></Animation>
          <PointLight diffuse="#FF0000"></PointLight>
          <Sphere :position="[1, 0, 1]"></Sphere>
          <template v-for="x in [0, 4, -4]">
            <template v-for="y in [0, 4, -4]">
              <Box v-for="z in [0, 4, -4]" :position="[x, y, z]" :key="`${x},${y},${z}`"></Box>
            </template>
          </template>
        </Entity>
      </Scene>
  </div>
</template>

<script>
// @ is an alias to /src
import { Vector3, Color3, Matrix } from "vue-babylonjs";

export default {
  name: 'About',
  data() {
    return { 
      testScene: null, 
      testSphere: null,
      myCamera: {
          type:"arcRotate", // universal|free|follow|arcRotate|arcFollow|deviceOrientation|touch|gamepad
          position: new Vector3(100,100,100),
          target: new Vector3(0,0,0),
          alpha:-1,
          beta:1,
          radius:100
      },
      color: new Color3(1,1,0),
      matrix:new Matrix(0,0,0)
    };
  },
}
</script>