<template>
  <div id="app">
    <nav>
      <router-link to="/">Start</router-link>
      <router-link to="/docs/introdution">Documentation</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 2rem;
  background-color: #1b1b1d;
}

nav a {
  text-decoration: none;
  color: #dfdfe3;
  font-weight: bold;
}

nav a.router-link-active {
  color: #42b983;
}
</style>