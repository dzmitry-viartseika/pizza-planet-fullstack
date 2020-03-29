<template>
  <div id="app">
    <HeaderTemplate/>
    <BannerTemplate/>
    <MenuTemplate/>
    <AdminTemplate/>
    <PizzaComponent/>
    <FooterTemplate/>
    <router-view/>
  </div>
</template>

<script>
import HeaderTemplate from './components/HeaderTemplate.vue';
import FooterTemplate from './components/FooterTemplate.vue';
import BannerTemplate from './components/BannerTemplate.vue';
import MenuTemplate from './components/MenuTemplate.vue';
import AdminTemplate from './components/AdminTemplate.vue';
import PizzaComponent from './components/PizzaComponent.vue';

export default {
  name: 'Home',
  components: {
    PizzaComponent,
    HeaderTemplate,
    FooterTemplate,
    BannerTemplate,
    MenuTemplate,
    AdminTemplate,
  },
};
</script>

<style lang="scss">
  @import "assets/scss/main";

</style>
