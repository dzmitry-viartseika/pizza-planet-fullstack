<template>
    <div class="menu">
      <HeaderTemplate/>
      <MenuTemplate/>
    </div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import MenuTemplate from '../components/MenuTemplate.vue';
import localStorageToken from '../mixins/localStorageToken';

export default {
  name: 'Menu',
  mixins: [localStorageToken],
  components: {
    HeaderTemplate,
    MenuTemplate,
  },
};
</script>

<style scoped>

</style>
