<template>
  <div>
    <h1 class="headtitle">Lieux de stockage</h1>
    <list>
      <template v-slot:searchBar>
        <storage-filter @set-filters="filtersChanged" @open-dialog="openDialog" />
      </template>
      <storage-list :search="search" @openDialogEditSalle="openDialog" />
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
import StorageService from "../service/storage.service";

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
    async checkStorageChange() {
      if (JSON.stringify(this.selectedStorage) === JSON.stringify(this.oldStorage)) {
        return;
      }
      StorageService.update(this.selectedStorage.id, {...this.selectedStorage,});
      Object.assign(this.oldStorage, this.selectedStorage);
    },
    createStorage() {
      StorageService.post({ ...this.selectedStorage });
    },
  },
};
</script>

<style lang="scss">
</style>