<template>
  <list>
    <template v-slot:searchBar>
      <object-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
    </template>
    <object-list :search="search" @openDialogEditObject="openDialog" />
    <edit-object v-model="selectedObject" :categories="categories" :dialog="dialog" @close="closeDialog"/>
  </list>
</template>

<script>
  import ObjectList from '../components/object/ObjectList.vue';
  import EditObject from '../components/object/EditObject.vue';
  import ObjectFilter from '../components/object/ObjectFilter.vue';
  import List from '../components/List.vue';
  import CategoryService from '../service/category.service';
  import ObjectService from '../service/object.service';
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
      selectedObject: {},
      categories: []
    }),
    methods: {
      filtersChanged(field) {
        this.search = field;
      },
      openDialog(object) {
        this.selectedObject = object;
        this.dialog = true;
      },
      closeDialog(object) {
        this.dialog = false;
        if(object){
          if(object.id == null)
            ObjectService.post(object);
          else
            ObjectService.update(object.id, object);
        }
      }
    },
    mounted() {
      CategoryService.get().then((res) => (this.categories = res.data));
    },
  }
</script>

<style lang="scss">
  
</style>