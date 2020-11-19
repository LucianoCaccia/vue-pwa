<template>
  <div id="app">
      <header>
        <the-nav></the-nav>
      </header>
      <main role="main">
        <router-view/>
      </main>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav.vue'
export default {
  components: {
    TheNav
  },
  data () {
    return {
    }
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
  margin-top: 70px;

}
</style>
