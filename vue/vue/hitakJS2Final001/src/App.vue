<template>
  <div>
    <nav>
      <router-link to="/">Home Page</router-link>
      <router-link to="/info">Info Page</router-link>
      <router-link to="/about">About Page</router-link>
      <router-link to="/loginCompo">Login</router-link>
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