<template>
  <section class="space--sm bg--secondary">
    <div class="container mb-5 text-center">
      <h3 class="type--bold">Kelas Online yang Tersedia</h3>
    </div>
    <div v-if="loading" class="container text-center">
      <b-spinner class="spinning" label="Spinning" type="grow"></b-spinner>
    </div>
    <div v-else class="container">
      <b-row cols="2" cols-md="4" class="justify-content-lg-center">
        <card v-for="(course, index) in courses" :key="index" :data="course" />
      </b-row>
    </div>
  </section>
</template>

<script>
import card from './reusable/card'
import axios from 'axios'
export default {
  components: {
    card
  },
  data () {
    return {
      courses: [],
      error: false,
      loading: false
    }
  },
  methods: {
    fetchPopular () {
      this.loading = true
      axios({
        method: 'get',
        url: 'https://api.codepolitan.com/course/popular'
      })
        .then(({ data }) => {
          this.courses = data.filter(el => el.status === 'publish').slice(0, 4)
          localStorage.setItem('course', JSON.stringify(this.courses))
        })
        .catch(err => {
          console.log(err)
          if (localStorage.getItem('course')) {
            this.courses = JSON.parse(localStorage.getItem('course'))
          } else {
            this.error = {
              message: 'Terjadi Sebuah Kesalahan'
            }
          }
        })
        .finally(_ => {
          this.loading = false
        })
    }
  },
  created () {
    this.fetchPopular()
  }
}
</script>

<style>

</style>
