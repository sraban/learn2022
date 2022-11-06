<template>
  <div class="about">
      <Scene debug="true">
        <Camera type="arcRotate" :radius="3"></Camera>
        
        <HemisphericLight diffuse="#F00" specular="#0F0" :direction="[-1, 1, 0]">
          <Property name="groundColor" color="#0F0"></Property>
        </HemisphericLight>

        <Sphere :position="[-1.5, 0, 0]">
          <Material diffuse="#0F0">
            <Texture src="https://www.babylonjs-playground.com/textures/grass.png"></Texture>
          </Material>
        </Sphere>

        <Sphere>
          <Material>
            <Texture type="emissive" src="https://www.babylonjs-playground.com/textures/grass.png"></Texture>
          </Material>
        </Sphere>

        <Sphere :position="[1.5, 0, 0]">
          <Material diffuse="#F00">
            <Texture type="ambient" src="https://www.babylonjs-playground.com/textures/grass.png"></Texture>
          </Material>
        </Sphere>

      </Scene>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  data() {
    return { 
      testScene: null, 
      testSphere: null,
    };
  },
}
</script>