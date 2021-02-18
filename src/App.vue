<template>
  <div id="app">
    <navbar />
    <router-view />
    <footer-vue />
  </div>
</template>

<script>
import footerVue from './components/footer.vue'
import navbar from './components/navbar'
export default {
  name: 'App',
  components: {
    navbar,
    footerVue
  }
}
</script>

<style lang="scss">
.bgHome {
  background-repeat: no-repeat;
  position: relative;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover !important;
  background-position: 50% 50% !important;
  transition: opacity .3s linear;
  -webkit-transition: opacity .3s linear;
}

.cp-primary {
  background-color: #07a6a1 !important;
}
.bg--secondary {
  background-color: #FAFAFA !important;
}
</style>
