<template>
  <list>
    <template v-slot:searchBar>
      <association-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
    </template>
    <association-list :search="search" @openDialogEditAssociation="openDialog" />
    <edit-association v-model="selectedAssociation" :dialog="dialog" @close="closeDialog"/>
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
    selectedAssociation: {}
  }),
  methods: {
    filtersChanged(field) {
      this.search = field;
    },
    openDialog(association) {
      this.selectedAssociation = association;
      this.dialog = true;
    },
    closeDialog(association) {
      this.dialog = false;
      if(association){
          if(association.id == null)
            AssociationService.post(association);
          else
            AssociationService.update(association.id, association);
        }
    }
  }
};
</script>

<style lang="scss">
</style>