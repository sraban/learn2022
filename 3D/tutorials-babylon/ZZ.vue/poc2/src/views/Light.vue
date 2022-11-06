<template>
  <div class="about">
      <Scene>
        <Camera type="arcRotate"></Camera>
        <HemisphericLight diffuse="#F00"></HemisphericLight>

        <Box :position="[-2,0,0]">
          <Material diffuse="#ffffff"></Material>
          <Animation property="rotation.x" :duration="3" :end="Math.PI * 2"></Animation>
          <Animation property="rotation.y" :duration="3" :end="Math.PI * -2"></Animation>
        </Box>

        <IcoSphere :position="[1.3,0,0]">
          <Material diffuse="#FF0"></Material>
          <Animation property="rotation.x" :duration="3" :end="Math.PI * 2"></Animation>
          <Animation property="rotation.y" :duration="3" :end="Math.PI * 2"></Animation>
        </IcoSphere>

      </Scene>



      <Scene>
        <Camera type="arcRotate"></Camera>
        <PointLight :position="[0,0.5,0]" specular="#FF0000"></PointLight>
        
        <IcoSphere :position="[-3.3,1,0]">
          <Material diffuse="#FFFF33"></Material>
        </IcoSphere>

        <IcoSphere :position="[3.3,1,0]">
          <Material diffuse="#7FFF00"></Material>
        </IcoSphere>

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