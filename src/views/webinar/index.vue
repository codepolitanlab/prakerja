<template>
  <section class="space--sm">
    <section class="switchable feature-large pb-0 pt-0">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-md-6">
            <b-img-lazy fluid alt="Image" src="@/assets/img/img-mentoring.png" />
          </div>
          <div class="col-md-6 col-lg-5">
            <div class="switchable__text pt-md-5 pt-0">
              <h2 class="text-left type--bold">Jadwal Webinar Kartu Prakerja Bersama Codepolitan</h2>
              <p class="mb-5 text-left" style="line-height: 24px">
                Webinar Kartu Prakerja Codepolitan merupakan seminar online yang diselenggarakan secara live oleh Codepolitan untuk mendukung proses belajar dalam kelas online Kartu Prakerja.
                <br>
                <br> Setiap peserta yang bergabung dalam program Kartu Prakerja bersama Codepolitan wajib mengikuti minimal 1 kali pertemuan webinar untuk bisa menyelesaikan kelas.
              </p>
              <p class="h3 mt-5 type--bold mb-0">Jadwal Webinar Selanjutnya:</p>
              <p class="h2 type--bold" style="color: #14A7A0">Kamis, {{ date }} <br> Pukul 19:00 WIB</p>
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
