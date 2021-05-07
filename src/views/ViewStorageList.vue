<template>
  <list>
    <template v-slot:searchBar>
      <storage-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
    </template>
    <storage-list :search="search"/>
    <edit-storage v-model="selectedStorage" :dialog="dialog" @close="closeDialog"/>
  </list>
</template>


<script>
  import StorageFilter from '../components/storage/StorageFilter.vue';
  import StorageList from "../components/storage/StorageList";
  import EditStorage from '../components/storage/EditStorage.vue';
  import List from "../components/List";

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
      openDialog(categorie) {
        // TODO vrai traitement
        this.selectedCategorie = categorie;
        this.dialog = true;
      },
      closeDialog(categorie) {
        // TODO vrai traitement
        console.log(categorie);
        this.dialog = false;
      }
    }
  }

</script>

<style lang="scss">

</style>