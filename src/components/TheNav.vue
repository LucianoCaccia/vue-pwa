<template>
  <b-container>
    <b-navbar toggleable="sm" type="light" variant="light" fixed="top">
      <div class="container">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand>Vue Project</b-navbar-brand>
          <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav v-for="(item, key) in menu" v-bind:key="key">
              <b-nav-item
                v-bind:to="item.path">{{ item.name }}
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </div>
    </b-navbar>
  </b-container>
</template>

<script>
import json from '@/router/mainmenu.json'
export default {
  name: 'TheNav',
  data () {
    return {
      menu: json.menu
    }
  }
}
</script>

<style scoped>
.router-link-exact-active {
  color: #42b983 !important;
}
</style>
