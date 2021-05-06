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
          <v-text-field label="Rechercher" filled rounded style="padding: 10px;" v-model="search"></v-text-field>

          <v-row align="center" justify="space-around">
            <v-btn text><v-icon left>mdi-close</v-icon>Filtres</v-btn>
            <v-btn depressed color="primary"> <v-icon> mdi-plus </v-icon>Nouveau</v-btn>
          </v-row>
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
            <v-data-iterator
              subheader
              :items="objects"
              item-key="id"
              :search="search"
            >
              <template v-slot:default="{ items }">
                <v-list
                  subheader
                  two-line
                >
                  <v-list-item 
                    v-for="objet in items"
                    :key="objet.id"
                  >
                    <v-list-item-avatar>
                      <v-icon
                        class="grey lighten-1"
                        dark
                      >
                        mdi-folder
                      </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title v-text="objet.name"></v-list-item-title>

                      <v-list-item-subtitle v-text="objet.lendable"></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-information</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </template>
            </v-data-iterator>
          <!-- MAIN CARD STOP -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ObjectService from "../service/object.service";
  export default {
    name: "ObjectList",
    data: () => ({
      objects: [],
      search: '',
    }),

    mounted() {
      ObjectService.get().then((res) => (this.objects = res.data));
    },
  }
</script>

<style lang="scss">
  
</style>