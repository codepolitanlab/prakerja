<template>
  <b-container class="box-kelas text-lg-left text-xl-left">
    <a :href="'https://codepolitan.com/course/intro/' + data.slug">
      <b-img v-show="loaded === true" class="card-img-top mb-0 kelasImage" @load="imgLoaded" :src="data.thumbnail || data.cover" :alt="data.title" />
      <b-skeleton-img v-if="loaded === false"></b-skeleton-img>
      <div class="card-body pl-0 pr-0">
        <h5 class="mb-1 font-weight-bold">{{ data.title }}</h5>
        <div class="d-flex justify-content-between">
          <p class="text-modul mb-0">{{ data.total_module.toLocaleString() }} Modul</p>
          <!-- <p class="text-modul mb-0">{{ data.total_student.toLocaleString() }} Siswa</p> -->
        </div>
        <p class="mb-2 text-price font-weight-bold price-color">{{ formatter(data.retail_price) }}</p>
      </div>
    </a>
  </b-container>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    formatter (x) {
      if (this.data.premium === 1 && x === 0) {
        return 'Membership'
      } else if (x === -1) {
        return 'Membership'
      } else if (x === 0) {
        return 'Gratis'
      } else {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumSignificantDigits: 3
        }).format(x)
      }
    },
    imgLoaded () {
      this.loaded = true
    }
  }
}
</script>

<style scoped>
.price-color {
  color: #07a6a1;
}
.kelasImage {
  border-radius: 0.65rem !important;
}
.text-modul {
  color: #9a9a9a;
}
h5 {
  line-height: 22px;
}
</style>
