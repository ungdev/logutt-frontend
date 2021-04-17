<template>
  <div>
    <TheNavbar/>
    <ObjectList/>
  </div>

</template>


<script>
  import ObjectList from '../components/ObjectList.vue';
  import TheNavbar from '../components/TheNavbar.vue';

  export default {
    name: 'ViewObjectList',

    components:{
      ObjectList,
      TheNavbar
    }
  }

</script>

<style lang="scss">
  
</style>