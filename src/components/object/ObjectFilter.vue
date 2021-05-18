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
      <v-btn depressed color="primary" @click="openDialogNewObject"> <v-icon> mdi-plus </v-icon>Nouvel objet</v-btn>
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
      openDialogNewObject() {
        this.$emit('open-dialog', {})
      }
    },
  }
</script>

<style>
  .btn-new {
    margin-bottom: 5%;
  }
</style>