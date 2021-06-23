<template>
<div>
  <h1 class="headtitle">Inventaire</h1>
<list>
    <template v-slot:searchBar>
      <object-filter @set-filters="filtersChanged" @open-dialog="openDialog" />
    </template>
    <object-list :search="search" v-model="listObject" @openDialogEditObject="openDialog" />
    <edit-object
      v-model="selectedObject"
      :categories="categories"
      :dialog="dialog"
      @save="save"
      @cancel="cancel"
    />
  </list>
</div>
  
</template>

<script>
import ObjectList from "../components/object/ObjectList.vue";
import EditObject from "../components/object/EditObject.vue";
import ObjectFilter from "../components/object/ObjectFilter.vue";
import List from "../components/List.vue";
import {category as CategoryService, object as ObjectService} from "../service/logUTT.service";
export default {
  name: "ViewObjectList",
  components: {
    ObjectList,
    EditObject,
    ObjectFilter,
    List,
  },
  data: () => ({
    search: "",
    dialog: false,
    selectedObject: {},
    oldObject: {},
    listObject: [],
    categories: [],
  }),

  methods: {
    filtersChanged(field) {
      this.search = field;
    },
    openDialog(object) {
      this.selectedObject = object ? { ...object } : {};
      this.oldObject = object;
      this.dialog = true;
    },

    cancel() {
      Object.assign(this.selectedObject, this.oldObject);
      this.dialog = false;
    },

    save() {
      if (this.selectedObject.id) {
        this.checkObjetChange();
      } else {
        this.createObjet();
      }
      this.selectedObject, (this.oldObject = {});
      this.dialog = false;
    },
    async checkObjetChange() {
      if (JSON.stringify(this.selectedObject) === JSON.stringify(this.oldObject)) {
        return;
      }
      ObjectService.update(this.selectedObject.id, {...this.selectedObject});
      Object.assign(this.oldObject, this.selectedObject);
    },
    createObjet() {
      ObjectService.post({ ...this.selectedObject });
      this.getListObject();
    },

    /**
     * Permet de récupérer la liste de tous les objets
     */
    getListObject() {
      ObjectService.get().then((res) => {
        this.listObject = res.data;
      });
    }
  },

  mounted() {
    CategoryService.get().then((res) => (this.categories = res.data));
    this.getListObject();
  },
};
</script>

<style lang="scss">
  #menu {
    display: inline;
  }
</style>