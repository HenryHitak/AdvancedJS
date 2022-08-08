<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/aboutcomp">About</router-link>
      <router-link to="/information">Information</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
</style>
