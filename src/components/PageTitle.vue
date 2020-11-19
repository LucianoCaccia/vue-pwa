<template>
  <b-container>
    <div class="pg-title">
      <h1 header="BootstrapVue">
        {{ $route.name }}
      </h1>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>

<style scoped>
  .pg-title {
    text-align: left;
    border-bottom: 1px #e4e4e4 solid;
  }
</style>
