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
          <div class="menu-table-content-desc"
               v-for="(elem, i) in item.options"
               :key="i"
          >
            <div class="menu-table-content-desc__item">{{ elem.size }} ''</div>
            <div class="menu-table-content-desc__item">{{ elem.price }}</div>
            <div class="menu-table-content-desc__item">
              <button @click="addToCart(item.name, elem)">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="menu-cart">
        <div class="menu-cart-header">
          <div class="menu-cart-header__item">Size</div>
          <div class="menu-cart-header__item">Price</div>
          <div class="menu-cart-header__item">Add to cart</div>
        </div>
        <div class="menu-cart-content"
             v-for="(el, i) in cartList"
             :key="i"
        >
          <div class="menu-cart-content-desc__item">
            <button @click="quantityMinus(el)">
              -
            </button>
            {{ el.quantity }}
            <button  @click="quantityPlus(el)">
              +
            </button>
          </div>
          <div class="menu-cart-content-desc__item">
            {{ el.name }} {{ el.size }}
          </div>
          <div class="menu-cart-content-desc__item">
            {{ el.price }}
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
      cartList: [],
      goodsList: [],
    };
  },
  methods: {
    addToCart(naming, options) {
      const item = {
        name: naming,
        size: options.size,
        price: options.price,
        quantity: 1,
      };
      this.cartList.push(item);
    },
    quantityPlus(el) {
      // eslint-disable-next-line no-param-reassign,no-plusplus
      el.quantity++;
    },
    quantityMinus(el) {
      // eslint-disable-next-line no-param-reassign,no-plusplus
      el.quantity--;
      if (el.quantity < 0) {
        // eslint-disable-next-line no-param-reassign,no-plusplus
        el.quantity = 0;
      }
    },
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
    &-cart {
      &-content {
        display: flex;
        flex-direction: row;
      }
    }
    &-table, &-cart {
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
