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
        <v-btn color="blue darken-1" text @click="suppression">
          Supprimer
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {category as CategorieService, association as AssociationService, storage as StorageService, object as ObjectService} from "../service/logUTT.service";

export default {
  name: "VIconSuppression",
  
  data() {
      return {
        validSupp: false,
      }
    },

  props: ['database', 'donnees'],

  methods: {
    suppression: function () {
      this.validSupp = false;
      switch (this.database) {
        case 'listeSalle':  // BDD des salles de stockage
          StorageService.delete(this.donnees.id)
          //this.$emit('suppression', this.donnees);
          break;
        case 'listeAsso':
          AssociationService.delete(this.donnees.id);
          break;
        case 'listeObject':
          ObjectService.delete(this.donnees.id);
          break;
        case 'listeCategorie':
          CategorieService.delete(this.donnees.id)
          break;
        default:
          console.log(this.database + " n'est pas une valeure définie !");
      }
      // TODO Récupérer l'objet et envoyer une requête à l'API pour le supprimer
    },
  }
};
</script>

<style lang="scss">

.v-application .headline {
  font-size: 1.2rem !important;
}

</style>