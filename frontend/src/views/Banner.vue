<template>
    <div class="banner">
      <HeaderTemplate/>
      <BannerTemplate/>
      <div class="container">
        <div class="banner-row">
          <div class="banner-row__item"
               v-for="item in infoSection"
               :key="item.name"
          >
            <components
              :is="item.component"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import BannerTemplate from '../components/BannerTemplate.vue';
import OrderingGuide from './OrderingGuide.vue';
import Delivery from './Delivery.vue';
import History from './History.vue';
import LocalStorageToken from '../mixins/localStorageToken';

export default {
  name: 'Banner',
  mixins: [LocalStorageToken],
  data() {
    return {
      infoSection: [
        {
          name: 'delivery',
          component: Delivery,
        },
        {
          name: 'history',
          component: History,
        },
        {
          name: 'ordering',
          component: OrderingGuide,
        },
      ],
    };
  },
  components: {
    BannerTemplate,
    HeaderTemplate,
  },
};
</script>

<style scoped lang="scss">
  .banner {
    &-row {
      display: flex;
      justify-content: center;
      align-items: center;
      &__item {
        width: 33%;
        padding: 10px;
      }
    }
  }
</style>
