<template>
  <div>
    <PageTitle></PageTitle>
    <div class="container">
      <b-form-select class="text-left mt-2" name="countries" id="c-select" v-model="selected" v-on:change="findBorders" >
        <option value="">Select country</option>
        <option v-for="country in countries"
          v-bind:value="country"
          v-bind:key="country.name"
          >{{ country.name }}
        </option>
      </b-form-select>
      <template v-if="show">
      <b-card class="text-left mt-2">
        <b-card-title><img fluid v-bind:src="'https://www.countryflags.io/' + selected.alpha2Code + '/shiny/32.png'"> {{ selected.name }}</b-card-title>
        <b-card-text>Capital: {{ selected.capital }}</b-card-text>
        <b-card-text>Population: {{ selected.population }}</b-card-text>
        <b-card-text>Region: {{ selected.subregion }}</b-card-text>
        <div>Borders:
          <span v-for="(border, key) in bordersName" v-bind:key="border">
            {{ border }}<span v-show="key < bordersName.length - 1 && key < bordersName.length - 2">, </span>
            <span v-show="key === bordersName.length - 2"> and </span>
          </span>
          <span v-if="bordersName === null"></span>
          <span v-else-if="bordersName.length === 0">{{ selected.name + " hasn't land borders with others countries" }}</span>
        </div>
      </b-card>
      </template>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import axios from 'axios'
export default {
  components: {
    PageTitle
  },
  data () {
    return {
      countries: null,
      error: null,
      selected: '',
      bordersName: null,
      show: false
    }
  },
  methods: {
    findBorders (selected) {
      this.bordersName = []
      for (let i = 0; i < this.selected.borders.length; ++i) {
        const b = this.selected.borders[i]
        const c = this.countries
        for (let k = 0; k < c.length; ++k) {
          if (c[k].alpha3Code === b) {
            this.bordersName.push(c[k].name)
          }
        }
      }
      this.show = true
      return this.bordersName
    }
  },
  created () {
    axios({
      method: 'GET',
      url: 'https://restcountries-v1.p.rapidapi.com/all',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
        'x-rapidapi-key': 'aa67f71245msh536e67934e38d69p113d4bjsn21ba3c00ce54',
        useQueryString: true
      }
    })
      .then((response) => {
        this.countries = response.data
      })
      .catch((error) => {
        this.error = error
      })
  }
}
</script>
