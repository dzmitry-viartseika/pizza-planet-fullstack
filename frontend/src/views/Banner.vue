<template>
    <div class="banner">
      <HeaderTemplate/>
      <BannerTemplate/>
      <div class="banner-row">
        <div class="banner-row__item">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="banner-row__item">
          <router-view name="history"></router-view>
        </div>
        <div class="banner-row__item">
          <router-view name="delivery"></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import BannerTemplate from '../components/BannerTemplate.vue';

export default {
  name: 'Banner',
  components: {
    BannerTemplate,
    HeaderTemplate,
  },
};
</script>

<style scoped>

</style>
