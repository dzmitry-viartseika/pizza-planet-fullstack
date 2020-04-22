<template>
    <div class="admin">
      <HeaderTemplate/>
      <AdminTemplate/>
    </div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import AdminTemplate from '../components/AdminTemplate.vue';
import localStorageToken from '../mixins/localStorageToken';

export default {
  name: 'Admin',
  mixins: [localStorageToken],
  components: {
    AdminTemplate,
    HeaderTemplate,
  },
};
</script>

<style scoped>

</style>
