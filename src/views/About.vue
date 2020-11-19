<template>
  <div>
    <PageTitle></PageTitle>
    <the-jumbotron v-bind:msg="msg"></the-jumbotron>
    <div class="container">
      <p class="text-left">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
      </p>
      <p class="text-left">
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
      </p>
      <p class="text-left">
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      </p>
      <p class="text-left">
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
      </p>
    </div>
  </div>
</template>

<script>
import TheJumbotron from '@/components/TheJumbotron.vue'
import PageTitle from '@/components/PageTitle.vue'
const message = 'Vamos con Vue todavía. Let`s moving foward!!'
export default {
  components: {
    PageTitle,
    TheJumbotron
  },
  data () {
    return {
      msg: message
    }
  }
}
</script>
