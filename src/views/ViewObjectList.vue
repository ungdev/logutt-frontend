<template>
  <list>
    <template v-slot:searchBar>
      <object-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
    </template>
    <object-list :search="search"/>
    <edit-object v-model="selectedObject" :dialog="dialog" @close="closeDialog"/>
  </list>
</template>

<script>
  import ObjectList from '../components/object/ObjectList.vue';
  import EditObject from '../components/object/EditObject.vue';
  import ObjectFilter from '../components/object/ObjectFilter.vue';
  import List from '../components/List.vue';
  export default {
    name: 'ViewObjectList',
    components:{
      ObjectList,
      EditObject,
      ObjectFilter,
      List,
    },
    data: () => ({
      search: '',
      dialog: false,
      selectedObject: {}
    }),
    methods: {
      filtersChanged(field) {
        this.search = field;
      },
      openDialog(object) {
        // TODO vrai traitement
        this.selectedObject = object;
        this.dialog = true;
      },
      closeDialog(object) {
        // TODO vrai traitement
        console.log(object);
        this.dialog = false;
      }
    }
  }
</script>

<style lang="scss">
  
</style>