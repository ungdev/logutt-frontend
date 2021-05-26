<template>
  <v-app>
    <TheNavbar/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
export default { 
    components: {
      TheNavbar
    },
}

</script>


<style lang="scss">
  .v-application--wrap {
    background:#eeeeee;
  }

  #app {
    width: 100%;
  }

  .headtitle {
    margin-left: 10%;
  }
  
</style>
