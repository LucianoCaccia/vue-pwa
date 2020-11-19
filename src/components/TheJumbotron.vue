<template>
  <b-container fluid="true">
    <b-row>
      <b-col>
        <b-jumbotron header="BootstrapVue" header-level="5" lead="Bootstrap v4 Components for Vue.js 2">
          <div class="row">
            <div class="col-12">
              <p>{{ msg }}</p>
              <b-button variant="primary" href="./#/countries">Check this app</b-button>
            </div>
          </div>
        </b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'TheJumbotron',
  props: ['msg']
}
</script>

<style scoped>

</style>
