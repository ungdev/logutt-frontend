<template>
  <list @set-filters="filtersChanged">
    <object-list :search="search"/>
  </list>
</template>

<script>
  import ObjectList from '../components/object/ObjectList.vue';
  import List from '../components/List.vue';
  export default {
    name: 'ViewObjectList',
    components:{
      ObjectList,
      List,
    },
    data: () => ({
      search: '',
    }),
    methods: {
      filtersChanged(field) {
        this.search = field;
      }
    }
  }
</script>

<style lang="scss">
  
</style>