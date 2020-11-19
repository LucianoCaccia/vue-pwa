<template>
  <b-container>
    <div id="form-data">
      <div class="row">
        <div class="col-sm">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1" label="First Name:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.name"
                required
                placeholder="Enter your first name"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.lastname"
                required
                placeholder="Enter yout last name"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group>
            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="vegan">vegan ingredient</b-form-checkbox>
                <b-form-checkbox value="vegetarian">Vegetarian ingredient</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>&nbsp;
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </div>
        <div class="col-sm">
            <b-card class="mt-3" header="Data Result">
              <p class="m-0">{{ this.person }}</p>
              <p class="m-0">{{ this.msg }}</p>
            </b-card>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        lastname: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Eggs', 'Milk', 'Tomatoes', 'Corn', 'Chiken'],
      show: true,
      person: '',
      msg: ''
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.person = 'Thank you ' + this.form.name.toUpperCase() + ' ' + this.form.lastname.toUpperCase()
      this.msgEmpty = 'You did`n check any option. Please check one of both.'
      this.msgVegetarianOk = 'Good choice. ' + this.form.food + ' are a vegetarian Ingredient'
      this.msgVegetarianNo = 'mmmm... ' + this.form.food + ' are not a vegetarian Ingredient'
      this.msgVeganOk = 'Awesome. ' + this.form.food + ' are a vegan Ingredient'
      this.msgVeganNo = 'Are you sure? ' + this.form.food + ' are not a vegan Ingredient'
      if (this.form.checked.length === 0) {
        this.msg = this.msgEmpty
      } else {
        if (this.form.checked.includes('vegetarian')) {
          switch (this.form.food) {
            case 'Carrots':
            case 'Eggs':
            case 'Milk':
            case 'Tomatoes':
            case 'Corn':
              this.msg = this.msgVegetarianOk
              break
            default: this.msg = this.msgVegetarianNo
          }
        }
        if (this.form.checked.includes('vegan')) {
          switch (this.form.food) {
            case 'Carrots':
            case 'Tomatoes':
            case 'Corn':
              this.msg = this.msgVeganOk
              break
            default: this.msg = this.msgVeganNo
          }
        }
        if (this.form.checked.includes('vegan') && this.form.checked.includes('vegetarian')) {
          this.msg = 'I am confusing because the ingredients must to be vegan or vegetarian, never both'
        }
      }
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.name = ''
      this.form.lastname = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
div#form-data {text-align: left; margin-top: 20px;}
input#input-1,
input#input-2 {text-transform: uppercase;}
div.card-body p {font-size: 1.3rem}
</style>
