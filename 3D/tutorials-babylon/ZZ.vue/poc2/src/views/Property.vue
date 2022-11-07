<template>
  <div class="about">
      <Scene>
          <Camera type="arcRotate"></Camera>
          
          <Box :scaling="[0.5, 1, 1]" :position="[2, 0, 0]"></Box>
          
          <Sphere :properties="{ position: $vector([-2, 0, 0]) }"></Sphere>

          <Cylinder>
            <property name="scaling" :vector="{ x: 2, y: 0.5, z: 1 }"></property>
          </Cylinder>


          <Entity>
            <Animation property="rotation.x" :duration="5" :end="Math.PI * 2"></Animation>
            <!-- Standard Light component props-->
            <PointLight diffuse="#F0F" :position="[0, 0, 4]"></PointLight>
          </Entity>


          <Entity>
            <Animation property="rotation.y" :duration="5" :end="Math.PI * 2"></Animation>
            <!-- Property components-->
            <PointLight>
              <property name="diffuse" color="#0FF"></property>
              <property name="position" :vector="[0, 0, 4]"></property>
            </PointLight>
          </Entity>

          
          <Entity>
            <Animation property="rotation.z" :duration="5" :end="Math.PI * 2"></Animation>
            <!-- Properties prop object on Entity component (set multiple values!)-->
            <!-- $color() helper function-->
            <PointLight :properties="{ diffuse: $color('#FF0'), specular: $color({ r: 1, g: 0, b: 0 }) }">
              <!-- Mix-and-match!-->
              <property name="position" :vector="[0, 4, 0]"></property>
            </PointLight>
          </Entity>


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