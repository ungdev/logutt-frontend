<template>
  <div>
    <h1 class="headtitle">Catégories</h1>
    <list>
      <template v-slot:searchBar>
        <categorie-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
      </template>
      <categorie-list :search="search" v-model="listCategorie" @openDialogNewSubCategorie="openDialogNewSubCategorie" @openDialogEditCategorie="openDialog"/>
      <edit-categorie v-model="selectedCategorie" :dialog="dialog" @save="save" @cancel="cancel"/>
    </list>
  </div>
</template>

<script>
import CategorieFilter from '../components/categorie/CategorieFilter.vue';
import CategorieList from "../components/categorie/CategorieList";
import EditCategorie from '../components/categorie/EditCategorie.vue';
import List from "../components/List";
import {category as CategoryService} from "../service/logUTT.service";

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
    selectedCategorie: {},
    oldCategorie: {},
    listCategorie: [],
  }),
  methods: {
    filtersChanged(field) {
      this.search = field;
    },
    openDialog(categorie) {
      this.selectedCategorie = categorie ? {...categorie} : {};
      this.oldCategorie = categorie;
      this.dialog = true;
    },
    openDialogNewSubCategorie(parentCategorie){
      this.selectedCategorie = {parent_id: parentCategorie.id};
      this.dialog = true;
    },

    cancel() {
      Object.assign(this.selectedCategorie, this.oldCategorie);
      this.dialog = false;
    },

    save() {
        if (this.selectedCategorie.id) {
          this.checkCategorieChange();
        } else {
          this.createCategorie();
        }
        this.selectedCategorie, this.oldCategorie = {};
        this.dialog = false;
      },
      async checkCategorieChange() {
        if (JSON.stringify(this.selectedCategorie) === JSON.stringify(this.oldCategorie)) {
          return
        }
        CategoryService.update(this.selectedCategorie.id, {...this.selectedCategorie});
        Object.assign(this.oldCategorie, this.selectedCategorie);
      },
      createCategorie() {
        CategoryService.post({...this.selectedCategorie});
        this.getListCategorie();
      },

    /**
     * Permet de récupérer la liste de toutes les catégorie
     */
    getListCategorie() {
      CategoryService.get().then((res) => {
        this.listCategorie = res.data
      });
    }
  },

  mounted() {
    this.getListCategorie();
  },
};
</script>

<style lang="scss">

</style>