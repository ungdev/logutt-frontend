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
      <v-btn depressed class="btn-new" color="primary" @click="openDialogNewStorage"> <v-icon> mdi-plus </v-icon>Nouveau stockage</v-btn>
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
      openDialogNewStorage() {
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