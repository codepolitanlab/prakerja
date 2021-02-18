<template>
  <section class="space--sm">
    <div class="container text-center">
      <h3 class="type--bold">Pertanyaan yang Sering Ditanyakan</h3>
    </div>
    <div class="container">
      <accordion>
        <accordion-item v-for="(x, index) in list" :key="index">
          <template slot="accordion-trigger">
            <div class="d-flex">
              <b-icon class="mt-2 mr-2" icon="caret-right-fill"></b-icon>
              <h5>{{ x.title }}</h5>
            </div>
          </template>
          <template slot="accordion-content">
            <span>{{ x.content }}</span>
          </template>
        </accordion-item>
      </accordion>
    </div>
  </section>
</template>

<script>
import Accordion from './reusable/accordion'
import AccordionItem from './reusable/accordion-item'
export default {
  components: {
    Accordion,
    AccordionItem
  },
  data () {
    return {
      list: [
        {
          title: 'Apa yang harus saya lakukan setelah saya melakukan pembelian?',
          content: 'Setelah melakukan pembelian, kamu akan mendapatkan notifikasi pembelianmu dan juga kode voucher melalui nomor WA, oleh sebab itu pastikan kamu menuliskan nomor WA yang valid pada saat pendaftaran'
        },
        {
          title: 'Bagaimana cara mengaktifkan kode vouchernya?',
          content: 'Untuk menggunakan kode vouchernya, kamu bisa klik tab “AKTIVASI VOUCHER”, setelah itu tuliskan kode voucher yang kamu punya, lalu klik “Submit”'
        },
        {
          title: 'Bagaimana cara belajarnya?',
          content: 'Pembelajaran dilaksanakan secara online. Pilihlah kelas yang ingin kamu pelajari, kemudian klik materi dari paling awal. Setelah itu, kamu bisa mulai belajar dengan cara menonton kelas tersebut. Bila video sudah beres ditonton, klik tombol “OK, SAYA SUDAH PAHAM” lalu klik tombol “Next” untuk masuk ke materi selanjutnya'
        },
        {
          title: 'Apa yang dimaksud dengan “Discussion” yang berada di bawah video tutorial?',
          content: 'Discussion adalah pertanyaan-pertanyaan yang pernah diajukan oleh member lainnya terkait materi tersebut. Bila kamu memiliki pertanyaan yang sama, kamu bisa klik pada pertanyaan tersebut lalu melihat jawaban dari para tim support CodePolitan'
        },
        {
          title: 'Bila saya memiliki pertanyaan saat belajar, bagaimana cara bertanyanya?',
          content: 'Dibawah video tutorial terdapat tombol “TANYA DI FORUM”, klik tombol tersebut, lalu tuliskan judul pertanyaanmu di bagian “Judul Thread” dan tuliskan pertanyaanmu secara jelas dan detail dibagian “Pertanyaan mu”. Bila sudah, klik “Post Question”'
        },
        {
          title: 'Apakah kelas di Pra Kerja memiliki kuis?',
          content: 'Iya. Setiap kelas memiliki kuis, dimana kuis dibagi menjadi 2 yaitu kuis evaluasi dan kuis akhir. Pada kuis evaluasi, setiap jawaban yang salah akan ditunjukan sehingga kamu bisa mengulang kuis tersebut. Sedangkan kuis akhir memiliki KKM (Kriteria Ketuntasan Minimal) dimana peserta harus memiliki skor minimal untuk menyelesaikan kelas tersebut'
        },
        // {
        //   title: 'Bagaimana cara klaim sertifikat?',
        //   content: 'Pada bagian materi, silahkan berikan penilaian dan ulasan tentang kelas tersebut kemudian klik “Post”. Selanjutnya kamu bisa klik tombol “KLAIM SERTIFIKATMU DISINI”. Selanjutnya kamu akan langsung diarahkan pada sertifikatmu. Klik “Download” untuk menyimpan sertifikatmu'
        // },
        {
          title: 'Apakah saya bisa mengakses kelasnya menggunakan handphone?',
          content: 'Bisa, tapi untuk pembelajaran yang lebih optimal kami menyarankan untuk belajar menggunanakan laptop/komputer saja'
        },
        {
          title: 'Kapan saya akan dapat insentif pemerintah?',
          content: 'Insentif mengikuti peraturan dan jadwal PMO (manajemen pelaksana program Kartu Prakerja / pemerintah). Untuk hal ini dapat ditanyakan langsung ke customer service program Kartu Prakerja di prakerja.go.id'
        },
        {
          title: 'Apakah pelatihan yang sudah saya pesan bisa dibatalkan?',
          content: 'Tidak bisa. Pelatihan yang sudah kamu beli bersifat final dan tidak bisa dilakukan pengembalian dana ke akun Prakerja milik kamu.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
