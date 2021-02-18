<template>
  <section class="space--sm">
    <div class="text-center">
      <h3 class="type--bold text-light">
        Cara Membeli Program & Redeem Voucher
        <br>
        Kartu Prakerja di Codepolitan
      </h3>
    </div>
    <div>
      <section class="space--xs pt-0 pb-0 border-detail">
        <div class="container-prakerja">
          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-bg pt-3 pb-5">
                <h5 class="timeline-title type--bold pb-md-3 pb-0">
                  Mendaftar di Program Kartu Prakerja
                </h5>
                <div class="ml-2 timeline-text pt-0 pb-0">
                  <p class="mb-0">Persyaratan:</p>
                  <ol class="ml-4">
                    <li class="mb-0">WNI</li>
                    <li class="mb-0">Minimal Berusia 18 Tahun</li>
                    <li class="mb-0">Sedang tidak menempuh pendidikan Formal</li>
                  </ol>
                  <p class="mb-0 mt-4">
                    Untuk melakukan pendaftaran pada program Kartu Prakerja, klik tombol berwarna hitam dengan label <b> DAFTAR KARTU PRAKERJA </b> di bawah ini atau kunjungi <span style="color: #14A7A0">www.prakerja.go.id</span> kemudian ikuti langkah-langkah yang diberikan.
                  </p>
                  <b-button variant="dark" class="type--uppercase mt-3 pl-3 pr-3">Daftar kartu prakerja</b-button>
                </div>
                <!-- <small class="timeline-text"></small> -->
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-bg pt-3 pb-5">
                <h5 class="timeline-title type--bold pb-md-3 pb-0">
                  Gunakan melalui mitra resmi Codepolitan <span class="hidden-sm hidden-xs"> untuk Kartu Prakerja </span>
                </h5>
                <div class="ml-2 timeline-text pt-0 pb-0">
                  <p class="mb-0">Klik logo mitra Codepolitan di bawah ini untuk melanjutkan</p>
                  <div class="mb-0 mt-4 d-md-flex">
                    <img src="@/assets/img/tokopedia.webp" class="mr-md-5 mr-0" height="100" alt="tokopedia">
                    <img src="@/assets/img/Bukalapak-1.webp" class="ml-md-5 ml-0" height="100" alt="bukalapak">
                  </div>
                </div>
                <!-- <small class="timeline-text"></small> -->
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-bg pt-3 pb-5">
                <h5 class="timeline-title type--bold pb-md-3 pb-0">
                  Membuat akun di Codepolitan
                </h5>
                <div class="ml-2 timeline-text pt-0 pb-0">
                  <p class="mb-0 mt-4">
                    Untuk membuat akun Codepolitan, klik tombol hijau dengan label <b> BUAT AKUN CODEPOLITAN </b>di bawah ini atau klik tombol hijau dengan label <b> DAFTAR </b>di kanan atas pada menu utama. Kemudian ikuti langkah-langkah yang diberikan. Bagi kamu yang telah memiliki akun Codepolitan, lakukan login dengan klik tombol putih dengan label <b> MASUK</b> di bawah ini atau dengan cara klik tombol putih dengan label <b> MASUK</b> di kanan atas pada menu utama.
                  </p>
                  <div class="d-md-flex">
                    <a class="btn btn--primary text-light type--bold type--uppercase mt-3 pl-3 pr-3">Buat akun codepolitan</a>
                    <a class="btn btn-light text-dark type--bold type--uppercase mt-3 pl-3 pr-3 ml-0 ml-md-3">masuk</a>
                  </div>
                </div>
                <!-- <small class="timeline-text"></small> -->
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-bg pt-3 pb-5">
                <h5 class="timeline-title type--bold pb-md-3 pb-0">
                  Aktivasi voucher belajar dari mitra resmi <span class="hidden-sm hidden-xs">Codepolitan</span>
                </h5>
                <div class="ml-2 timeline-text pt-0 pb-0">
                  <p class="mb-0 mt-4">
                    Lakukan aktivasi voucher dengan cara klik tombol hijau dengan label <b> AKTIVASI VOUCHER</b> di bawah ini atau dengan cara klik menu <b> AKTIVASI VOUCHER</b> pada menu utama yang berada pada navbar atas. Selanjutnya ikuti langkah-langkah yang diberikan.
                  </p>
                  <a class="btn btn-success text-light type--bold type--uppercase mt-3 pl-3 pr-3">Aktivasi Voucher</a>
                </div>
                <!-- <small class="timeline-text"></small> -->
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.container-prakerja {
  margin-left: 150px;
  margin-right: 150px;
}
@media only screen and (max-width: 760px) {
  .hidden-sm {
    visibility: hidden;
  }
  .hidden-xs {
    visibility: hidden;
  }
  .container-prakerja {
    margin-left: 0px;
    margin-right: 0px;
  }
  .timeline {
    $color: white;
    $timeline-font-color: black;

    padding-left: 30px !important;
    padding-right: 5px !important;
    margin: 0;
    position: relative;
    counter-reset: list 0;

    &-item {
      list-style: none;
      padding-top: 10px !important;
      border-left: 2px solid #D3D3D3;
      padding-left: 33px !important;

      &:first-child {
        padding-top: 0px;
      }

      &:last-child {
        padding-bottom: 0px;
      }
    }

    &-title {
        margin: 0;
        padding: 0;
        padding-bottom: 21px;
        &:before {
          $size: 60px;
          color: $timeline-font-color;
          position: relative;
          left: -66px !important;
          display: inline-block;
          width: $size;
          height: $size;
          line-height: $size;
          text-align: center;
          border-radius: 50%;
          border: 2px solid white;
          background-color: $color;
          counter-increment: list;
          content: counter(list);
      }
    }

    &-text {
      margin: 0;
      padding: 0;
    }
  }
}
.space--sm {
  background-color: #9A9A9A;
}
.timeline {
  $color: white;
  $timeline-font-color: black;

  padding: 0 60px;
  margin: 0;
  position: relative;
  counter-reset: list 0;

  &-bg {
    background-color: #FFFFFF;
    border-radius: 0.65rem;
  }

  &-item {
    list-style: none;
    border-left: 2px solid white;
    padding-left: 70px;
    padding-top: 20px;

    &:first-child {
      padding-top: 0px;
    }

    &:last-child {
      padding-bottom: 0px;
    }
  }

  &-title {
      margin: 0;
      padding: 0;
      padding-bottom: 21px;
      &:before {
        $size: 60px;
        color: white;
        position: relative;
        left: -100px;
        display: inline-block;
        width: $size;
        height: $size;
        line-height: $size;
        text-align: center;
        border-radius: 50%;
        border: 2px solid white;
        background-color: #14A7A0;
        counter-increment: list;
        content: counter(list);
    }
  }

  &-text {
    margin: 0;
    padding: 60px;
  }
}

</style>
