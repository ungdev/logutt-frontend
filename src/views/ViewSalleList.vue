<template>
  <div>
    <TheNavbar/>
    <SalleList/>
  </div>

</template>


<script>
  import SalleList from '../components/SalleList.vue';
  import TheNavbar from '../components/TheNavbar.vue';

  export default {
    name: 'ViewSalleList',

    components:{
      SalleList,
      TheNavbar
    }
  }

</script>

<style lang="scss">

</style>