<template>
  <list>
    <template v-slot:searchBar>
      <storage-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
    </template>
    <storage-list :search="search" @openDialogEditSalle="openDialog"/>
    <edit-storage v-model="selectedStorage" :dialog="dialog" @close="closeDialog"/>
  </list>
</template>


<script>
  import StorageFilter from '../components/storage/StorageFilter.vue';
  import StorageList from "../components/storage/StorageList";
  import EditStorage from '../components/storage/EditStorage.vue';
  import List from "../components/List";
  import StorageService from '../service/storage.service';

  export default {
    name: 'ViewSalleList',

    components:{
      StorageFilter,
      StorageList,
      EditStorage,
      List,
    },
    data: () => ({
      search: '',
      dialog: false,
      selectedStorage: {}
    }),
    methods: {
      filtersChanged(field) {
        this.search = field;
      },
      openDialog(storage) {
        this.selectedStorage = storage;
        this.dialog = true;
      },
      closeDialog(storage) {
        this.dialog = false;
        if(storage){
          if(storage.id == null)
            StorageService.post(storage);
          else
            StorageService.update(storage.id, storage);
        }
      }
    }
  }

</script>

<style lang="scss">

</style>