<template>
  <div class="about">
      <Scene>
        <Camera type="arcRotate" :radius="7.5" :beta="Math.PI / 3"></Camera>
        <HemisphericLight></HemisphericLight>
        <Asset src="https://www.babylonjs-playground.com/scenes/skull.babylon" :scaling="[0.02, 0.02, 0.02]" :position="[4, 0.5, 0]"></Asset>
        <Asset src="https://www.babylonjs-playground.com/scenes/Buggy/glTF/buggy.gltf" :scaling="[0.02, 0.02, 0.02]" :position="[1, 0, -1]" :rotation="[0, Math.PI / 2, 0]"></Asset>
        <Asset src="https://www.babylonjs-playground.com/scenes/StanfordBunny.obj" :scaling="[7.5, 7.5, 7.5]" :position="[-4, -0.25, -0.5]" :rotation="[0, Math.PI, 0]"></Asset>
        <Asset src="https://rawgit.com/saswata26/misc/master/base.stl" :scaling="[0.02, 0.02, 0.02]" :position="[-2, 0, -0.5]"></Asset>
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