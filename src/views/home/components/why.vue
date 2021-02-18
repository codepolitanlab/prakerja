<template>
  <section class="space--sm text-center pb-5">
    <div class="container">
      <h3 class="font-weight-bold">Mengapa Memilih Kartu Prakerja di CODEPOLITAN?</h3>
    </div>
    <b-container>
      <b-row cols="1" cols-md="3">
        <b-col class="mb-3">
          <div>
            <div class="box-kelas">
              <img class="card-img-top mb-0 kelasImage program-css" src="@/assets/img/Lebih_Cepat.webp" alt="Mengapa Codepolitan?">
              <div class="card-body pl-0 pr-0">
                <h5 class="mb-1 font-weight-bold">Belajar Online 100% Lebih <br> Cepat dan Terarah</h5>
              </div>
            </div>
          </div>
        </b-col>
        <b-col class="mb-3">
          <div>
            <div class="box-kelas">
              <img class="card-img-top mb-0 kelasImage program-css" src="@/assets/img/Tentukan_Waktu_Sendiri.webp" alt="Mengapa Codepolitan?">
              <div class="card-body pl-0 pr-0">
                <h5 class="mb-1 font-weight-bold">Kamu yang Tentukan <br> Sendiri Waktu Belajarmu</h5>
              </div>
            </div>
          </div>
        </b-col>
        <b-col class="mb-3">
          <div>
            <div class="box-kelas">
              <img class="card-img-top mb-0 kelasImage program-css" src="@/assets/img/Study-Kasus.webp" alt="Mengapa Codepolitan?">
              <div class="card-body pl-0 pr-0">
                <h5 class="mb-1 font-weight-bold">Belajar Langsung dari <br> Project Studi Kasus</h5>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <section class="switchable feature-large pb-0 pt-0">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="switchable__text">
              <b-row cols="3" cols-md="5" class="justify-content-center pt-5">
                <div>
                  <div class="text-block text-center mb-5"><b-icon icon="sort-alpha-down" class="h1"></b-icon>
                    <h4>Alur Belajar Terarah</h4>
                  </div>
                </div>
                <div>
                  <div class="text-block text-center mb-5"><b-icon icon="check2-circle" class="h1"></b-icon>
                    <h4>Waktu Belajar Fleksibel</h4>
                  </div>
                </div>
                <div>
                  <div class="text-block text-center mb-5"><b-icon icon="ui-checks" class="h1"></b-icon>
                    <h4>Progress Belajar Terukur</h4>
                  </div>
                </div>
                <div>
                  <div class="text-block text-center mb-5"><b-icon icon="briefcase" class="h1"></b-icon>
                    <h4>Kurikulum Standar Industri</h4>
                  </div>
                </div>
                <div>
                  <div class="text-block text-center mb-5"><b-icon icon="play-btn" class="h1"></b-icon>
                    <h4>Video Tutorial</h4>
                  </div>
                </div>
                <!-- <div>
                  <div class="text-block text-center mb-5"><b-icon icon="journal-code" class="h1"></b-icon>
                    <h4>Materi Terus Bertambah</h4>
                  </div>
                </div> -->
                <div>
                  <div class="text-block text-center mb-5"><b-icon icon="award" class="h1"></b-icon>
                    <h4>Sertifikat Online</h4>
                  </div>
                </div>
                <div>
                  <div class="text-block text-center mb-5">
                    <b-iconstack class="h1 mb-4 pt-3">
                      <b-icon stacked icon="chat-left-text" font-scale="0.5" shift-v="-9" shift-h="-10"></b-icon>
                      <b-icon stacked icon="chat-right-text" font-scale="0.5" shift-h="10"></b-icon>
                      <b-icon stacked icon="chat-left-text" font-scale="0.5" shift-v="9" shift-h="-10"></b-icon>
                    </b-iconstack>
                    <h4>Forum Diskusi <br> Tanya Jawab</h4>
                  </div>
                </div>
                <div>
                  <div class="text-block text-center mb-5"><b-icon icon="hand-thumbs-up" class="h1"></b-icon>
                    <h4>Metode Best Practice</h4>
                  </div>
                </div>
                <div>
                  <div class="text-block text-center mb-5">
                    <b-iconstack class="h1 mb-4 pt-1">
                      <b-icon stacked icon="phone" font-scale="0.5" shift-v="-3" shift-h="10"></b-icon>
                      <b-icon stacked icon="laptop" font-scale="0.5" shift-h="-5"></b-icon>
                    </b-iconstack>
                    <h4>Contoh Project</h4>
                  </div>
                </div>
                <div>
                  <div class="text-block text-center mb-5"><b-icon icon="code-slash" class="h1"></b-icon>
                    <h4>Source Code Program</h4>
                  </div>
                </div>
                <!-- <div class="col-md-2 col-4 mt-0">
                  <div class="text-block text-center mb-5"><b-icon icon="cash" class="h1"></b-icon>
                    <h4>Garansi Uang Kembali</h4>
                  </div>
                </div> -->
              </b-row>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
}
</script>

<style>
.div.card {
  border-radius: 0.65rem;
}
.box-kelas {
  cursor: pointer;
  transition: transform 2s smooth;
}
.box-kelas:hover {
 transform: scale(1.03);
}
img.card-img-top {
  border-top-right-radius: 0.65rem !important;
  border-top-left-radius: 0.65rem !important;
  margin: 0;
}
.program-css {
  border-bottom-right-radius: 0.65rem !important;
  border-bottom-left-radius: 0.65rem !important;
}
</style>
