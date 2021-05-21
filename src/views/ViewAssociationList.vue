<template>
  <list>
    <template v-slot:searchBar>
      <association-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
    </template>
    <association-list :search="search" @openDialogEditAssociation="openDialog" />
    <edit-association v-model="selectedAssociation" :dialog="dialog" @cancel="cancel" @save="save"/>
  </list>
</template>


<script>
import AssociationFilter from '../components/association/AssociationFilter.vue';
import AssociationList from "../components/association/AssociationList";
import EditAssociation from '../components/association/EditAssociation.vue';
import List from "../components/List";
import AssociationService from '../service/association.service';

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
      }
  }
};
</script>

<style lang="scss">
</style>