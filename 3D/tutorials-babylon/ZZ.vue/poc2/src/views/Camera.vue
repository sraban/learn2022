<template>
  <div class="about">
      <Scene v-model="testScene">
        <Sphere v-model="testSphere"></Sphere>
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