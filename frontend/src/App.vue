<template>
  <div id="app">
    <HeaderTemplate/>
    <BannerTemplate/>
    <MenuTemplate/>
    <FooterTemplate/>
    <router-view/>
  </div>
</template>

<script>
import HeaderTemplate from './components/HeaderTemplate.vue';
import FooterTemplate from './components/FooterTemplate.vue';
import BannerTemplate from './components/BannerTemplate.vue';
import MenuTemplate from './components/MenuTemplate.vue';

export default {
  name: 'Home',
  components: {
    HeaderTemplate,
    FooterTemplate,
    BannerTemplate,
    MenuTemplate,
  },
};
</script>

<style lang="scss">
  @import "assets/scss/main";

</style>
