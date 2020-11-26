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
</style>
