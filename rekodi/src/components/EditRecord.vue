<template>
  <div class="edit container">
    <h1>Edit record / {{ route }}</h1>
  </div>
</template>

<script>
export default {
  name: 'EditRecord',
  data() {
    return {
      route: this.$route.params.edit,
    };
  },
};
</script>

<style scoped>

</style>
