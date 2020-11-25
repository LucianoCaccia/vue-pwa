<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <the-jumbotron v-bind:msg="msg"></the-jumbotron>
    <div class="container">
      <h4>Metro 95.1</h4>
      <audio controls="controls">Metro<source src="http://mp3.metroaudio1.stream.avstreaming.net:7200/metro" type="audio/mpeg" /></audio>
    </div>
    <div class="container mt-4 mb-5">
      <h4>Aspen 102.3</h4>
      <audio controls="controls">Aspen<source src="https://15363.live.streamtheworld.com/ASPENAAC_SC" type="audio/mpeg" /></audio>
    </div>
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
