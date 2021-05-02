<template>
  <v-dialog v-model="validSupp" persistent max-width="300px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon color="grey lighten-1">mdi-delete</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Confirmation de suppression</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <p>
            La suppression implique que le matériel contenu à l'intérieur de cet
            espace n'aura plus de lieu de stockage de référence.
          </p>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="validSupp = false">
          Annuler
        </v-btn>
        <v-btn color="blue darken-1" text @click="confirmer">
          Supprimer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "VIconSuppression",
  
  data() {
      return {
        validSupp: false,
      }
    },
    methods: {
    confirmer: function () {
      this.validSupp = false;
      // TODO Récupérer l'objet et envoyer une requête à l'API pour le supprimer
    },
    }
};
</script>

<style lang="scss">

</style>