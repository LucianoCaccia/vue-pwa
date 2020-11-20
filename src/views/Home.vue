<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <the-jumbotron v-bind:msg="msg"></the-jumbotron>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheJumbotron from '@/components/TheJumbotron.vue'
const message = 'New PWA: Discover massive country information'

export default {
  name: 'Home',
  components: { HelloWorld, TheJumbotron },
  data: function () {
    return {
      msg: message
    }
  }
}
</script>
