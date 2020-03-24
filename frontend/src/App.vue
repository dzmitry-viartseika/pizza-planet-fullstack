<template>
  <div id="app">
    <HeaderTemplate/>
    <FooterTemplate/>
    <router-view/>
  </div>
</template>

<script>
import HeaderTemplate from './components/HeaderTemplate.vue';
import FooterTemplate from './components/FooterTemplate.vue';

export default {
  name: 'Home',
  components: {
    HeaderTemplate,
    FooterTemplate,
  },
};
</script>

<style lang="scss">
  @import "assets/scss/main";

</style>
