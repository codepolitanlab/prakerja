<template>
  <div>
    <b-navbar toggleable="lg" variant="white" class="border-bottom" fixed="top">
      <div class="container">
        <b-navbar-brand to="/">
          <img src="@/assets/img/codepolitan.webp" alt="codepolitan">
        </b-navbar-brand>

        <b-navbar-toggle class="dark" target="nav-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="x-square"></b-icon>
            <b-icon v-else  icon="list"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <a class="nav-link ml-3 nav-text text-uppercase" href="https://apps.codepolitan.com/user/login?callback=voucher">Aktivasi Voucher</a>
            <a class="nav-link ml-3 nav-text text-uppercase" href="https://www.codepolitan.com/forum">Forum</a>
            <router-link class="nav-link ml-3 nav-text text-uppercase" to="/webinar">Jadwal Webinar</router-link>
            <a class="btn ml-3 btn-light text-dark nav-link type--bold text-uppercase pl-3 pr-3" :href="login">Masuk</a>
            <a :href="register" class="btn ml-3 btn--primary text-light nav-link type--bold text-uppercase pl-3 pr-3">Daftar</a>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      login: 'https://apps.codepolitan.com/user/login',
      register: 'https://apps.codepolitan.com/user/register'
    }
  }
}
</script>

<style scoped>
.nav-text {
  color: #707070;
}
span {
  font-weight: bold;
}
.text-membership {
  color: #ffffff !important;
}
.btn--primary {
  border-radius: 0.65rem;
}
ul:not([class*='menu']) li > a {
  font-weight: bold !important;
}
#my-nav-dropdown__BV_toggle_ span {
  font-weight: bold !important
}
</style>
