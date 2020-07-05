<template>
  <div class="navbar-wrapper">
    <div class="container-lg">
      <div class="navbar-ads">
        <div class="navbar-ads-left">
          <div class="icon-group">
            <span class="material-icons">bookmark</span>
            <span class="material-icons">local_offer</span>
          </div>
          <span>Gratis Ebook 9 Cara Cerdas Menggunakan Domain [ x ]</span>
        </div>
        <div class="navbar-ads-right">
          <div class="telepon">
            <span class="material-icons">call</span> 0274-5305505
          </div>
          <div class="qa">
            <span class="material-icons">question_answer</span> Live Chat
          </div>
          <div class="account">
            <span class="material-icons">account_circle</span> Member Area
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-primary border-top border-bottom">
      <div class="container-lg">
        <b-navbar toggleable="lg" type="light">
          <b-navbar-brand href="#">
            <img src="@/assets/images/niagahoster-logo.png"
                 width="200px"
                 alt="niagahoster-logo">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-navbar-nav>
                <b-nav-item href="#">Hosting</b-nav-item>
                <b-nav-item href="#">Domain</b-nav-item>
                <b-nav-item href="#">Server</b-nav-item>
                <b-nav-item href="#">Website</b-nav-item>
                <b-nav-item href="#">Afiliasi</b-nav-item>
                <b-nav-item href="#">Promo</b-nav-item>
                <b-nav-item href="#">Pembayaran</b-nav-item>
                <b-nav-item href="#">Review</b-nav-item>
                <b-nav-item href="#">Kontak</b-nav-item>
                <b-nav-item href="#">Blog</b-nav-item>
              </b-navbar-nav>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>
