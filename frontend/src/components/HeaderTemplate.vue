<template>
    <header class="header">
      <div class="container">
        <div class="header-row">
          <div class="header-row__logo"
               @click="proceedToHomePage()"
          >
            PIZZA PLANET
            <div>
              <br>
              Login as {{ userName }}
              {{ this.$store.getters.userRole }}
              <button class="btn btn-warning"
                      @click="signOff()">Sign off</button>
            </div>
          </div>
          <nav class="header-row__nav">
            <ul class="header-row__nav-list">
              <li class="header-row__nav-item"
                  v-for="(item,i) in menu"
                  :key="i"
              >
                <a @click="proceedToPage(item.route)"
                   class="header-row__nav-link">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderTemplate',
  data() {
    return {
      menu: [
        {
          title: 'Home',
          route: '/',
        },
        {
          title: 'Menu',
          route: '/menu',
        },
      ],
    };
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    },
  },
  methods: {
    signOff() {
      localStorage.removeItem('token');
      this.$store.commit('setUserName', '');
      this.$router.push('/');
    },
    proceedToPage(page) {
      this.$router.push(`${page}`);
    },
    proceedToHomePage() {
      this.$router.push('/banner');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .header {
    min-height: 80px;
    background: red;
    padding: 30px 0;
    &-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      &__nav {
        &-list {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }
        &-item {
          padding: 0 20px;
        }
        &-link {
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }
</style>
