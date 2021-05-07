<template>
  <v-container class="grey lighten-3">
    <v-row>
      <v-col
        cols="12"
        sm="4"
      >
        <v-sheet
          min-height="20vh"
          rounded="lg"
        >
          <!-- SUB CARD START -->
          <slot name="searchBar">
            <v-text-field label="Rechercher" filled rounded style="padding: 10px;" @keyup="searchField($event.target.value)"></v-text-field>
            <v-row align="center" justify="space-around">
              <v-btn text><v-icon left>mdi-close</v-icon>Filtres</v-btn>
              <v-btn depressed color="primary"> <v-icon> mdi-plus </v-icon>Nouveau</v-btn>
            </v-row>
          </slot>
          <!-- SUB CARD END -->
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        sm="8"
      >
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
          <!-- MAIN CARD START -->
            <slot></slot>
          <!-- MAIN CARD STOP -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "List",
    props: {
    },
    data: () => ({
    }),
    methods: {
      searchField(field) {
        this.$emit('set-filters', field);
      }
    }
  }
</script>

<style lang="scss">
  
</style>