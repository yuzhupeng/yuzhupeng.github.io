<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "./assets/css/common.less";
export default {
  name: "App",
  mounted () {
    document.getElementById("v-loading-container").style.display = "none";
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body,
#app {
  height: 100%;
}
</style>
