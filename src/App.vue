<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <n-footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    'n-footer': Footer,
  },
};
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';
</style>
