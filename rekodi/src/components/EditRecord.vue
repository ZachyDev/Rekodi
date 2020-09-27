<template>
  <div class="edit container" v-if="meetings">
    <h1>Edit record / {{ meetings.type }}</h1>
  </div>
</template>

<script>
import firestoreDb from '@/firebase/init';

export default {
  name: 'EditRecord',
  data() {
    return {
      meetings: null,
    };
  },
  created() {
    const ref = firestoreDb.collection('r_meeings').where('key', '==', this.$route.params.edit);
    ref.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        this.meetings = doc.data();
      });
    });
  },
};
</script>

<style scoped>

</style>
