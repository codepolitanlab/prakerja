<template>
  <section class="space--sm">
    <section class="switchable feature-large pb-0 pt-0">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-md-6 pt-5">
            <b-img-lazy fluid alt="Image" src="@/assets/img/img-mentoring.png" />
          </div>
          <div class="col-md-6 col-lg-5">
            <div class="switchable__text pt-md-5 pt-0">
              <h2 class="text-left type--bold">Jadwal Webinar Kartu Prakerja Bersama Codepolitan</h2>
              <p class="lead text-left">
                Webinar Kartu Prakerja Codepolitan merupakan seminar online yang diselenggarakan secara live oleh Codepolitan untuk mendukung proses belajar dalam kelas online Kartu Prakerja.
              </p>
              <p class="lead text-left">Setiap peserta yang bergabung dalam program Kartu Prakerja bersama Codepolitan wajib mengikuti minimal 1 kali pertemuan webinar untuk bisa menyelesaikan kelas.
              </p>
              <h4 class="mt-5 type--bold mb-0">Jadwal Webinar Selanjutnya:</h4>
              <p class="h3 type--bold" style="color: #14A7A0">Kamis, {{ date }} <br> Pukul 19:00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import moment from 'moment'
export default {
  data: () => {
    const dayINeed = 4
    const day = moment().isoWeekday(dayINeed)
    return {
      date: moment(day).format('ll')
    }
  }
}
</script>

<style>

</style>
