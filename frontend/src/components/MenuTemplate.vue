<template>
  <div class="container">
    <div class="menu">
      <div class="menu-table">
        <div class="menu-table-header">
          <div class="menu-table-header__item">
            Size
          </div>
          <div class="menu-table-header__item">
            Price
          </div>
          <div class="menu-table-header__item">
            Add to cart
          </div>
        </div>
        <div class="menu-table-content"
             v-for="item in goodsListArr"
             :key="item._id">
           <div class="menu-table-content__title">
             Name: {{ item.name }}
           </div>
           <div class="menu-table-content__title">
             Description: {{ item.description }}
           </div>
          <div class="menu-table-content-desc"
               v-for="(elem, i) in item.options"
               :key="i"
          >
            <div class="menu-table-content-desc__item">
              {{ elem.size }} ''
            </div>
            <div class="menu-table-content-desc__item">
              {{ elem.price }}
            </div>
            <div class="menu-table-content-desc__item">
              <button @click="addToCart(item.name, elem)"
                      class="btn btn-warning"
              >
                +
              </button>
            </div>
          </div>
          <button @click="deleteFromDataBase(item)"
                  class="btn btn-primary menu__button_delete"
                  v-if="role === 'admin'"
          >
            Delete from DB
          </button>
        </div>
      </div>
      <div class="menu-cart">
        <div class="menu-cart__info"
             v-if="cartListArr.length === 0"
        >
          Your cart is empty!
        </div>
        <div class="menu-cart-header"
             v-if="cartListArr.length !== 0">
          <div class="menu-cart-header__item">
            Size
          </div>
          <div class="menu-cart-header__item">
            Price
          </div>
          <div class="menu-cart-header__item">
            Add to cart
          </div>
        </div>
        <div class="menu-cart-content"
             v-for="(el, i) in cartListArr"
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
            {{ el.price * el.quantity }}
          </div>
        </div>
        <div class="menu-cart-total"
             v-if="cartListArr.length !== 0">
          Order total: {{ totalPrice }}$
        </div>
      </div>
    </div>
    <pizza-component/>
<!--    v-if="role === 'admin'"-->
  </div>
</template>

<script>
import GoodsApi from '../api/GoodsApi';
import PizzaComponent from './PizzaComponent.vue';

export default {
  name: 'MenuTemplate',
  components: {
    PizzaComponent,
  },
  computed: {
    role() {
      return this.$store.getters.userRole;
    },
    goodsListArr() {
      return this.$store.getters.goodsList;
    },
    cartListArr() {
      return this.$store.getters.cartList;
    },
    totalPrice() {
      const res = [];
      if (this.cartListArr.length !== 0) {
        this.cartListArr.forEach((item) => {
          res.push(+item.price * item.quantity);
        });
        const result = res.reduce((sum, el) => sum + el);
        return result.toFixed(2);
      } return 0;
    },
  },
  methods: {
    deleteFromDataBase(item) {
      const { _id } = item;
      this.$store.commit('deleteGoodsListItem', _id);
      GoodsApi.deleteItem(_id);
    },
    removeFromCart(el) {
      this.cartListArr.splice(this.cartListArr.indexOf(el), 1);
    },
    addToCart(naming, options) {
      const item = {
        name: naming,
        size: options.size,
        price: options.price,
        quantity: 1,
      };
      this.$store.commit('setCartItem', item);
    },
    quantityPlus(el) {
      // eslint-disable-next-line no-param-reassign,no-plusplus
      el.quantity++;
    },
    quantityMinus(el) {
      // eslint-disable-next-line no-param-reassign,no-plusplus
      el.quantity--;
      if (el.quantity === 0) {
        this.removeFromCart(el);
      }
    },
  },
  beforeMount() {
    GoodsApi.getGoodsList()
      .then((resp) => {
        this.$store.commit('setGoodsList', resp.data);
      }).catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style scoped lang="scss">
  .menu {
    display: flex;

    &__button {

      &_delete {
        margin: 15px 0;
      }
    }

    &-cart {

      &-content {
        display: flex;
        flex-direction: row;
      }
      &-total {
        font-size: 20px;
        font-weight: bold;
      }
    }
    &-table, &-cart {
      width: 600px;
      padding: 20px;

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
        border: 1px solid black;
        margin-bottom: 10px;
        padding: 10px;

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
              width: 40px;
              height: 40px;
            }
          }
        }
      }
    }
  }
</style>
