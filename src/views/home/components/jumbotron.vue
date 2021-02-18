<template>
  <div class="bgHome">
    <b-container class="pt-5">
      <b-jumbotron bg-variant="transparent" class="text-center pt-4 pb-0 mb-0">
        <h2 class="type--bolder mt-5">
          <b>Menjadi Kompeten dengan
            <br>
            Kartu Prakerja CodePolitan
          </b>
        </h2>

        <h3 class="text-gray">
          Kembangkan karirmu sebagai profesional dengan keahlian di <br> bidang IT yang dibutuhkan di dunia industri
        </h3>
      </b-jumbotron>
    <div>
      <img src="~@/assets/img/prakerja.webp" class="img-fluid" alt="Prakerja Codepolitan">
    </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style scoped>
.bgHome {
  background-color: #E2DDDA;
}
.height-100 {
  background-image: url('~@/assets/img/prakerja.webp');
  background-repeat: no-repeat;
  background-position: center;
}
@media only screen and (max-width: 760px) {
  #mobile {
    top: -290px;
    position: relative;
    padding-top: 300px;
  }
  .height-100 {
    max-width: 400px;
    width: 100%;
    background-size: contain;
    background-position-y: 100%;
    height: 60vh !important;
  }
}
.text-gray {
  color: gray;
}
</style>
