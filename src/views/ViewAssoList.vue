<template>
  <div>
    <TheNavbar/>
    <AssoList/>
  </div>

</template>


<script>
  import AssoList from '../components/AssoList.vue';
  import TheNavbar from '../components/TheNavbar.vue';

  export default {
    name: 'ViewAssoList',

    components:{
      AssoList,
      TheNavbar
    }
  }

</script>

<style lang="scss">
  
</style>