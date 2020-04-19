<template>
    <div class="admin">
      <HeaderTemplate/>
      <AdminTemplate/>
    </div>
</template>

<script>
import HeaderTemplate from '../components/HeaderTemplate.vue';
import AdminTemplate from '../components/AdminTemplate.vue';

export default {
  name: 'Admin',
  components: {
    AdminTemplate,
    HeaderTemplate,
  },
};
</script>

<style scoped>

</style>
