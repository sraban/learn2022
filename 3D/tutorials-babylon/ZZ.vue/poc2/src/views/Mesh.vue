<template>
  <div class="about">
    <button @click="changePosition()">Change Position of Sphere</button>
    <br/>
    <div>{{ pos }}</div>


        <Scene>
          <Camera type="arcRotate" :beta="Math.PI / 4" :radius="20"></Camera>
          <HemisphericLight></HemisphericLight>
          <Sphere :position="pos" :scaling="[2,1,5]"></Sphere>
          <Sphere :position="[-5,0,3]" :scaling="[2,2,3]"></Sphere>
          <Sphere :position="[-1,0,3]" :scaling="[4,5,1]"></Sphere>
          <Sphere :position="[6,0,3]" :scaling="[8,5,3]"></Sphere>
          <Box :position="[0,0,-3]" :scaling="[1,2,3]"></Box>
          <Box :position="[-3,0,-3]" :scaling="[2,1,2]"></Box>
          <Box :position="[-6,0,-3]" :scaling="[1,3,4]"></Box>
        </Scene>


        <Scene>
          <Camera type="arcRotate" :radius="15" :beta="Math.PI / 4"></Camera>
          <HemisphericLight></HemisphericLight>
          <Sphere :position="[6,0,0]" :scaling="[1,1,1]"></Sphere>
          <Torus :position="[4, 0, 0]"></Torus>
          <Box :v-model="myBox" :position="[2.5, 0, 0]">
            <Material diffuse="#F00" :metallic="0" :roughness="1"></Material>
          </Box>
          <Cylinder :position="[1, 0, 0]">
            <Material diffuse="#0F0" :metallic="0" :roughness="1"> </Material>
          </Cylinder>
          <!--DashedLinesDisc(:rotation="[0, Math.PI, 0]")
          -->
          <!--Ground(:options="{width: 10, height: 10}")-->
          <IcoSphere :position="[-1, 0, 0]"></IcoSphere>
          <!--Lathe-->
          <!--LineSystem-->
          <!--Plane-->
          <!--PolygonMesh-->
          <!--Polyhedron-->
          <!--Ribbon(:position="[9, 0, 0]")-->
          <!--TiledGround-->
          <TorusKnot :position="[-6, 0, 0]"></TorusKnot>
          <!--Tube(:position="[0, 0, 10]")-->
          <!--ExtrudePolygon(:position="[5, 0, 0]")-->
        </Scene>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  data() {
    return { 
    myBox: {}, 
    pos:[] };
  },
  methods: {
    changePosition() {
      let x = Math.random()*10;
      let y = Math.random()*10;
      let z = Math.random()*10;
      this.pos = [x,y,z];
    }
  }
}
</script>