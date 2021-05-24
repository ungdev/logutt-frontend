<template>
    <div class="text-center">
      <v-progress-circular
        indeterminate
        :size="250"
        :width="10"
        color="primary"
      ></v-progress-circular>
    </div>
</template>

<script>
  import auth from '../common/auth';
  export default {
    data: () => ({
    }),
    methods: {
    },
    mounted() {
      if (this.$route.query.code) {
        auth.login(this.$route.query.code)
      }
    }
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>