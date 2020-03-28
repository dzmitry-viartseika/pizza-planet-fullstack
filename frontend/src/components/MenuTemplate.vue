<template>
  <div class="menu">
    <div class="container">
      <div class="menu-table">
        <div class="menu-table-header">
          <div class="menu-table-header__item">Size</div>
          <div class="menu-table-header__item">Price</div>
          <div class="menu-table-header__item">Add to cart</div>
        </div>
        <div class="menu-table-content" v-for="item in goodsList" :key="item.id">
           <div class="menu-table-content__title">{{ item.name }}</div>
          <div class="menu-table-content-desc">
            <div class="menu-table-content-desc__item">{{ item.size }} ''</div>
            <div class="menu-table-content-desc__item">{{ item.price }}</div>
            <div class="menu-table-content-desc__item">
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsApi from '../api/GoodsApi';

export default {
  name: 'MenuTemplate',
  data() {
    return {
      goodsList: [],
    };
  },
  beforeMount() {
    GoodsApi.getGoodsList()
      .then((resp) => {
        this.goodsList = resp.data;
      }).catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style scoped lang="scss">
  .menu {
    &-table {
      width: 600px;
      &-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;
        background: lightgray;
        &__item {
          width: 20%;
          padding: 10px 20px;
          &:first-child {
            width: 50%;
          }
        }
      }
      &-content {
        &__title {
          margin-bottom: 10px;
          border-bottom: 1px solid gray;
        }
        &-desc {
          display: flex;
          flex-direction: row;
          align-items: center;
          &__item {
            width: 20%;
            padding: 10px 20px;
            &:first-child {
              width: 50%;
            }
            & button {
              border: 1px solid red;
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }
  }
</style>
