<template>
  <div class="about">
    <HeaderTemplate/>
    <nav>
      <ul>
        <router-link tag="li" to="/history">our history</router-link>
        <router-link tag="li" to="/contact">contact us</router-link>
        <router-link tag="li" to="/ordering-guide">ordering guite</router-link>
        <router-link tag="li" to="/delivery">delivery</router-link>
      </ul>
    </nav>
    <router-view></router-view>
    <FooterTemplate/>
  </div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import FooterTemplate from '../components/FooterTemplate.vue';
import localStorageToken from '../mixins/localStorageToken';

export default {
  name: 'About',
  mixins: [localStorageToken],
  components: {
    HeaderTemplate,
    FooterTemplate,
  },
};
</script>

<style lang="scss" scoped>

</style>
