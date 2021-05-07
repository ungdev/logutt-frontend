<template>
  <list>
    <template v-slot:searchBar>
      <association-filter @set-filters="filtersChanged" @open-dialog="openDialog"/>
    </template>
    <association-list :search="search"/>
    <edit-association v-model="selectedAssociation" :dialog="dialog" @close="closeDialog"/>
  </list>
</template>


<script>
import AssociationFilter from '../components/association/AssociationFilter.vue';
import AssociationList from "../components/association/AssociationList";
import EditAssociation from '../components/association/EditAssociation.vue';
import List from "../components/List";

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
      // TODO vrai traitement
      this.selectedAssociation = association;
      this.dialog = true;
    },
    closeDialog(association) {
      // TODO vrai traitement
      console.log(association);
      this.dialog = false;
    }
  }
};
</script>

<style lang="scss">
</style>