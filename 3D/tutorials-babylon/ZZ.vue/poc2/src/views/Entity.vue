<template>
  <div class="about">

      <Scene>
        <Camera type="arcRotate" :radius="20"></Camera>
        <DirectionalLight v-model="myLight"></DirectionalLight>
        <HemisphericLight emissive="#008800"></HemisphericLight>
        <PointLight specular="#0F0"></PointLight>
        <Entity>
          (v-model="myEntity2" :position="[6, 0, 0]")
          <Box :position="[-3,3,3]"></Box>
          <Box :position="[-9,3,3]"></Box>
          <Box :position="[-3,-3,3]"></Box>
          <Box :position="[-9,-3,3]"></Box>
          <Box :position="[-3,3,-3]"></Box>
          <Box :position="[-3,-3,-3]"></Box>
          <Box :position="[-9,3,-3]"></Box>
          <Box :position="[-9,-3,-3]"></Box>

          <Entity>
          (v-model="myEntity21" :position="[6, 0, 0]")
            <Animation property="rotation.x" :duration="5">
              <Key frame="0%" :value="0"></Key>
              <Key frame="100%" :value="Math.PI * 2"></Key>
            </Animation>
            <Box :position="[-4,2,2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[-4,-2,2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[-8,2,2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[-8,-2,2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[-4,2,-2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[-4,-2,-2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[-8,2,-2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[-8,-2,-2]">
              <Material diffuse="#00F"></Material>
            </Box>
          </Entity>
        </Entity>


        


        <Entity>
          (v-model="myEntity1" :position="[7, 0, 0]")
          <Animation property="rotation.x" :duration="5">
            <Key frame="0%" :value="0"></Key>
            <Key frame="100%" :value="Math.PI * 2"></Key>
          </Animation>
          <PointLight diffuse="#FF0000"></PointLight>
          <Box :position="[10,3,3]"></Box>
          <Box :position="[4,3,3]"></Box>
          <Box :position="[10,-3,3]"></Box>
          <Box :position="[4,-3,3]"></Box>
          <Box :position="[10,3,-3]"></Box>
          <Box :position="[4,-3,-3]"></Box>
          <Box :position="[4,3,-3]"></Box>
          <Box :position="[10,-3,-3]"></Box>
          <Entity>
            (v-model="myEntity11" :position="[7, 0, 0]")
            <Box :position="[9,2,2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[9,-2,2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[5,2,2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[5,-2,2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[9,2,-2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[9,-2,-2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[5,2,-2]">
              <Material diffuse="#00F"></Material>
            </Box>
            <Box :position="[5,-2,-2]">
              <Material diffuse="#00F"></Material>
            </Box>
          </Entity>
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