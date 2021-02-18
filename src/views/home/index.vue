<template>
  <div>
    <jumbotron-vue />
    <logo-vue />
    <banner-vue />
    <why-vue />
    <course-vue />
    <prakerja-vue />
    <faq-vue />
    <member-vue />
  </div>
</template>

<script>
import bannerVue from './components/banner.vue'
import courseVue from './components/course.vue'
import faqVue from './components/faq.vue'
import jumbotronVue from './components/jumbotron.vue'
import logoVue from './components/logo.vue'
import memberVue from './components/member.vue'
import prakerjaVue from './components/prakerja.vue'
import whyVue from './components/why.vue'
export default {
  name: 'App',
  components: {
    jumbotronVue,
    logoVue,
    bannerVue,
    whyVue,
    courseVue,
    prakerjaVue,
    faqVue,
    memberVue
  }
}
</script>

<style>

</style>
