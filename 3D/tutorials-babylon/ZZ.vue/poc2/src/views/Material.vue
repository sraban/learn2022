<template>
  <div class="about">
      <Scene>
        <Camera type="arcRotate"></Camera>
        <PointLight :position="[0, 2, -1]"></PointLight>
        <Sphere :position="[-2, 0, 0]">
          <Material diffuse="#00F"></Material>
        </Sphere>
        <Cylinder :position="[0, 0.5, 0]">
          <Material emissive="#008800"></Material>
        </Cylinder>
        <Box :position="[2, 0, 0]">
          <Material diffuse="#F00" :metallic="0" :roughness="1"></Material>
        </Box>
      </Scene>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  data() {
    return { testScene: null, testSphere: null };
  },
}
</script>