<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/animation">Animation*</router-link> |
      <router-link to="/assets">Assets</router-link> |
      <router-link to="/camera">Camera</router-link> |
      <router-link to="/entity">Entity*</router-link> |
      <router-link to="/light">Light*</router-link> |
      <router-link to="/material">Material</router-link> |
      <router-link to="/mesh">Mesh</router-link> |
      <router-link to="/observable">Observable*</router-link> |
      <router-link to="/physics">Physics</router-link> |
      <router-link to="/property">Property*</router-link> |
      <router-link to="/scene">Scene</router-link> |
      <router-link to="/texture">Texture</router-link> |
      <router-link to="/types">Types</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
