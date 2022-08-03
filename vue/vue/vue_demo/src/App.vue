<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <my-comp name='Henry' family='Lee'></my-comp>
  </div>
</template>

<script>
import myComp from './components/MyComp.vue'
export default {
  name: 'App',
  components: {
    myComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
