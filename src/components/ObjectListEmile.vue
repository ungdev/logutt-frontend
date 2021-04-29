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
          <v-text-field label="Rechercher" filled rounded style="padding: 10px;"></v-text-field>

          <v-row align="center" justify="space-around">
            <v-btn text><v-icon left>mdi-close</v-icon>Filtres</v-btn>
            <v-btn depressed color="primary">Nouveau</v-btn>
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
            <v-list
              subheader
              two-line
            >
              <v-list-item
                v-for="folder in objets"
                :key="folder.title"
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
                  <v-list-item-title v-text="folder.title"></v-list-item-title>

                  <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          <!-- MAIN CARD STOP -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: "ObjectList",
    data: () => ({
      links: [
        'Matériel',
        'Calendrier',
        'Prêts',
      ],
      objets: [
        {
          title: 'Appareil à crêpe',
          subtitle: 'Quantité : 3',
        },
        {
          title: 'Aspirateur',
          subtitle: 'Quantité : 2',
        },
        {
          title: 'Gillets jaune',
          subtitle: 'Quantité : 34',
        },
      ],
    }),
  }
</script>

<style lang="scss">
  
</style>