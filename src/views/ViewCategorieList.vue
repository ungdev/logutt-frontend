<template>
  <list>
    <template v-slot:searchBar>
      <categorie-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
    </template>
    <categorie-list :search="search" @openDialogEditCategorie="openDialog"/>
    <edit-categorie v-model="selectedCategorie" :dialog="dialog" @close="closeDialog"/>
  </list>
</template>

<script>
import CategorieFilter from '../components/categorie/CategorieFilter.vue';
import CategorieList from "../components/categorie/CategorieList";
import EditCategorie from '../components/categorie/EditCategorie.vue';
import List from "../components/List";
import CategoryService from '../service/category.service';

export default {
  name: "ViewCategorieList",
  components: {
    CategorieList,
    List,
    CategorieFilter,
    EditCategorie,
  },
  data: () => ({
    search: '',
    dialog: false,
    selectedCategorie: {}
  }),
  methods: {
    filtersChanged(field) {
      this.search = field;
    },
    openDialog(categorie) {
      this.selectedCategorie = categorie;
      this.dialog = true;
    },
    closeDialog(categorie) {
      this.dialog = false;
      if(categorie){
        console.log(categorie)
        if(categorie.id == null)
          CategoryService.post(categorie);
        else
          CategoryService.update(categorie.id, categorie);
      }
    }
  }
};
</script>

<style lang="scss">

</style>