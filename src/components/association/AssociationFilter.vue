<template>
  <v-container>
    <v-text-field
      label="Rechercher"
      filled
      rounded
      style="padding: 10px"
      @keyup="searchField($event.target.value)"
    ></v-text-field>
    <v-row align="center" justify="space-around">
      <v-btn depressed color="primary" @click="openDialogNewAssociation"> <v-icon> mdi-plus </v-icon>Nouvelle association</v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
    },
    data: () => ({
    }),
    methods: {
      searchField(field) {
        this.$emit('set-filters', field);
      },
      openDialogNewAssociation() {
        this.$emit('open-dialog', {})
      }
    },
  }
</script>
