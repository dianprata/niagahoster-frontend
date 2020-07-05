<template>
<footer>
  <div class="container-md">
    <div class="footer-top">
      <b-row>
        <b-col lg="3" sm="6" class="mt-sm-0 mt-3">
          <h6 class="footer-head-text">Hubungi Kami</h6>
          <p class="footer-contact">
            0274-5305505 <br>
            Senin - Minggu <br>
            24 Jam Nonstop
          </p>
          <p class="footer-address">
            Jl. Selokan Mataram Monjali <br>
            Karangjati MT I/304 <br>
            Sinduadi, Mlati, Sleman <br>
            Yogyakarta 55284 <br>
          </p>
        </b-col>
        <b-col lg="3" sm="6" class="mt-sm-0 mt-3">
          <h6 class="footer-head-text">Layanan</h6>
          <p>Domain</p>
          <p>Shared Hosting</p>
          <p>Cloud VPS Hosting</p>
          <p>Managed VPS Hosting</p>
          <p>Web Builder</p>
          <p>Keamanan SSL/HTTPS</p>
          <p>Jasa Pembuatan Website</p>
          <p>Program Affiliasi</p>
        </b-col>
        <b-col lg="3" sm="6" class="mt-sm-0 mt-3">
          <h6 class="footer-head-text">Service Hosting</h6>
          <p>Hosting Murah</p>
          <p>Hosting Indonesia</p>
          <p>Hosting Singapura SG</p>
          <p>Hosting PHP</p>
          <p>Hosting Wordpress</p>
          <p>Hosting Laravel</p>
        </b-col>
        <b-col lg="3" sm="6" class="mt-sm-0 mt-3">
          <h6 class="footer-head-text">Tutorial</h6>
          <p>Knowledgebase</p>
          <p>Blog</p>
          <p>Cara Pembayaran</p>
        </b-col>
      </b-row>
      <b-row class="mt-md-5 mt-3">
        <b-col lg="3" sm="6" class="mt-sm-0 mt-2">
          <h6 class="footer-head-text">Tentang Kami</h6>
          <p>Tim Niagahoster</p>
          <p>Karir</p>
          <p>Events</p>
          <p>Penawaran & Promo Spesial</p>
          <p>Kontak Kami</p>
        </b-col>
        <b-col lg="3" sm="6" class="mt-sm-0 mt-3">
          <h6 class="footer-head-text">Kenapa Pilih Niagahoster?</h6>
          <p>Support Terbaik</p>
          <p>Garansi Harga Termurah</p>
          <p>Domain Gratis Selamanya</p>
          <p>Datacenter Hosting Terbaik</p>
          <p>Review Pelanggan</p>
        </b-col>
        <b-col lg="3" sm="6" class="newsletter mt-sm-0 mt-3">
          <h6 class="footer-head-text">Newsletter</h6>
          <b-input-group class="input-email">
            <b-form-input placeholder="Email"></b-form-input>

            <b-input-group-append>
              <b-button variant="primary" pill class="px-1">Berlangganan</b-button>
            </b-input-group-append>
          </b-input-group>
          <p>Dapatkan promo dan konten menarik dari penyedia hosting terbaik Anda.</p>
        </b-col>
        <b-col lg="3" sm="6">
          <div class="footer-button-social">
            <b-button variant="outline-light" pill class="mx-2" size="lg">
              <i class="fab fa-facebook-f"></i>
            </b-button>
            <b-button variant="outline-light" pill class="mx-2" size="lg">
              <i class="fab fa-twitter"></i>
            </b-button>
            <b-button variant="outline-light" pill class="mx-2" size="lg">
              <i class="fab fa-google-plus-g"></i>
            </b-button>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-md-5 mt-3">
        <b-col class="mt-sm-0 mt-3">
          <h6 class="footer-head-text">Pembayaran</h6>
          <div class="footer-payment">
            <img src="@/assets/svg/bca.svg" alt="">
          </div>
          <div class="footer-payment">
            <img src="@/assets/svg/mandiri.svg" alt="">
          </div>
          <div class="footer-payment">
            <img src="@/assets/svg/bni.svg" alt="">
          </div>
          <div class="footer-payment">
            <img src="@/assets/svg/visa.svg" alt="">
          </div>
          <div class="footer-payment">
            <img src="@/assets/svg/atm-bersama.svg" alt="">
          </div>
          <div class="footer-payment">
            <img src="@/assets/svg/alto.svg" alt="">
          </div>
        </b-col>
      </b-row>
      <p class="footer-activation-payment">
      Aktivasi instan dengan e-Payment. Hosting dan domain langsung aktif!
    </p>
    </div>
    <div class="footer-bottom">
      <b-row>
        <b-col md="9">
          <p>Copyright &copy;2016 Niagahoster | Hosting powered by PHP7, CloudLinux, CloudFlare, BitNinja and DC Biznet Technovillage Jakarta</p>
          <p>Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud computing technology</p>
        </b-col>
        <b-col md="3">
          <p>Syarat dan Ketentuan | Kebijakan Privasi</p>
        </b-col>
      </b-row>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>

</style>
