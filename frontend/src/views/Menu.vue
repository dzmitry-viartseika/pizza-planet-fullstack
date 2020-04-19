<template>
    <div class="menu">
      <HeaderTemplate/>
      <MenuTemplate/>
    </div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import MenuTemplate from '../components/MenuTemplate.vue';

export default {
  name: 'Menu',
  components: {
    HeaderTemplate,
    MenuTemplate,
  },
};
</script>

<style scoped>

</style>
