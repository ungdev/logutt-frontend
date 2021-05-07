<template>
  <list>
    <template v-slot:searchBar>
      <categorie-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
    </template>
    <categorie-list :search="search"/>
    <edit-categorie v-model="selectedCategorie" :dialog="dialog" @close="closeDialog"/>
  </list>
</template>

<script>
import CategorieFilter from '../components/categorie/CategorieFilter.vue';
import CategorieList from "../components/categorie/CategorieList";
import EditCategorie from '../components/categorie/EditCategorie.vue';
import List from "../components/List";

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
};
</script>

<style lang="scss">

</style>