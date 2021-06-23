<template>
  <div>
    <h1 class="headtitle">Lieux de stockage</h1>
    <list>
      <template v-slot:searchBar>
        <storage-filter @set-filters="filtersChanged" @open-dialog="openDialog" />
      </template>
      <storage-list :search="search" @openDialogEditSalle="openDialog" v-model="listStorage" @suppressionStorage="aled(salle)"/>
      <edit-storage
        v-model="selectedStorage"
        :dialog="dialog"
        @cancel="cancel"
        @save="save"
      />
    </list>
  </div>
</template>


<script>
import StorageFilter from "../components/storage/StorageFilter.vue";
import StorageList from "../components/storage/StorageList";
import EditStorage from "../components/storage/EditStorage.vue";
import List from "../components/List";
import {storage as StorageService} from "../service/logUTT.service";

export default {
  name: "ViewSalleList",

  components: {
    StorageFilter,
    StorageList,
    EditStorage,
    List,
  },
  data: () => ({
    search: "",
    dialog: false,
    selectedStorage: {},
    oldStorage: {},
    listStorage: [],
  }),
  methods: {
    filtersChanged(field) {
      this.search = field;
    },
    openDialog(storage) {
      this.selectedStorage = storage ? {...storage} : {};
      this.oldStorage = storage;
      this.dialog = true;
    },

    cancel() {
      Object.assign(this.selectedStorage, this.oldStorage);
      this.dialog = false;
    },

    save() {
      if (this.selectedStorage.id) {
        this.checkStorageChange();
      } else {
        this.createStorage();
      }
      this.selectedStorage, (this.oldStorage = {});
      this.dialog = false;
    },

    aled: function (salle) {
      console.log("ViewListe");
      let c = salle;
      console.log("Salle : " + c);
      /**const index = this.listStorage.indexOf(salle);
      if (index > -1) {
        this.listStorage.splice(index, 1);
        StorageService.delete(salle.id)
      }*/
      console.log(this.listStorage);
    },

    async checkStorageChange() {
      if (JSON.stringify(this.selectedStorage) === JSON.stringify(this.oldStorage)) {
        return;
      }
      StorageService.update(this.selectedStorage.id, {...this.selectedStorage,});
      Object.assign(this.oldStorage, this.selectedStorage);
    },
    createStorage() {
      StorageService.post({ ...this.selectedStorage });
      this.getListStorage();
    },

  /**
   * Permet de récupérer la liste de tous les lieux de stockage
   */
    getListStorage() {
      StorageService.get().then((res) => {
        this.listStorage = res.data
      });
    }
  },

  mounted() {
    this.getListStorage();
  },
};
</script>

<style lang="scss">
</style>