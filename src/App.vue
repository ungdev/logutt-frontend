<template>
  <v-app>
    <router-view name="navBar"></router-view>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default { 
    name: "App",
    components: {
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
