<template>
  <div>
    <h1 class="headtitle">Liste des associations</h1>
    <list>
      <template v-slot:searchBar>
        <association-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
      </template>
      <association-list :search="search" v-model="listAssociation" @openDialogEditAssociation="openDialog" />
      <edit-association v-model="selectedAssociation" :dialog="dialog" @cancel="cancel" @save="save"/>
    </list>
  </div>
</template>


<script>
import AssociationFilter from '../components/association/AssociationFilter.vue';
import AssociationList from "../components/association/AssociationList";
import EditAssociation from '../components/association/EditAssociation.vue';
import List from "../components/List";
import {association as AssociationService} from "../service/logUTT.service";

export default {
  components: {
    AssociationFilter,
    AssociationList,
    List,
    EditAssociation,
  },
  data: () => ({
    search: '',
    dialog: false,
    selectedAssociation: {},
    oldAssociation: {},
    listAssociation: [],
  }),
  methods: {
    filtersChanged(field) {
      this.search = field;
    },
    openDialog(association) {
      this.selectedAssociation = association ? {...association} : {};
      this.oldAssociation = association;
      this.dialog = true;
    },

    cancel() {
      Object.assign(this.selectedAssociation, this.oldAssociation);
      this.dialog = false;
    },

    save() {
        if (this.selectedAssociation.id) {
          this.checkAssociationChange();
        } else {
          this.createAssociation();
        }
        this.selectedAssociation, this.oldAssociation = {};
        this.dialog = false;
      },
      async checkAssociationChange() {
        if (JSON.stringify(this.selectedAssociation) === JSON.stringify(this.oldAssociation)) {
          return
        }
        AssociationService.update(this.selectedAssociation.id, {...this.selectedAssociation});
        Object.assign(this.oldAssociation, this.selectedAssociation);
      },
      createAssociation() {
        AssociationService.post({...this.selectedAssociation});
        this.getListAssociation();
      },

    /**
     * Permet de récupérer la liste de tous les lieux de stockage
     */
    getListAssociation() {
      AssociationService.get().then((res) => {
        this.listAssociation = res.data
      });
    }
      
  },

  mounted() {
    this.getListAssociation();
  },
};
</script>

<style lang="scss">
</style>