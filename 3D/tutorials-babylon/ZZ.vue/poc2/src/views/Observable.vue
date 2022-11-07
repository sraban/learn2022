<template>
  <div>
    <Scene @complete="complete" @before-render$="beforeRender" @after-render$="++frames">
      <Box :position="[-2, 0, 5]" :scaling="scale.box" v-model="box"></Box>
      <Sphere :position="[2, 0, 5]" :scaling="scale.sphere" @entity="onSphere"></Sphere>
    </Scene>
    <div v-text="`Frames: ${frames}`" style="position: absolute; color: white; bottom: 0; padding: 15px"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  data() {
    return { 
      box: null,
      sphere: null,
      time: performance.now(),
      frames: 0,
    };
  },
  computed: {
    scale() {
      let a = 2 + Math.cos(this.time * 0.001);
      let b = 2 + Math.sin(this.time * 0.001);
      return {
        box: [a, b, 1],
        sphere: [b, a, 1],
      };
    },
  },
  methods: {
    beforeRender() {
      this.time = performance.now();
    },
    onSphere(event) {
      console.log('onSphere', event);
      // the entity event includes entity reference
      this.sphere = event.entity;
    },

    complete(event) {
      console.log('complete', event);
      console.log('box', this.box);
      console.log('sphere', this.sphere);
    },
  },



}
</script>