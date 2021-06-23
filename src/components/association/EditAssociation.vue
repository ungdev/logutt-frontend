<template>
  <v-row align="center" justify="space-around">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span v-if="value.id" class="headline">Modifier l'association</span>
          <span v-else class="headline">Nouvelle associatiton</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="value.name"
                  label="Nom de l'association*"
                  required
                  clearable
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small><span class="star-required">*</span> indiquez les champs requis</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDialog">
            Annuler
          </v-btn>
          <v-btn color="blue darken-1" :disabled="isDisable" text @click="commitAssociation">
            <span v-if="value.id">Enregistrer</span>
            <span v-else>Ajouter</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      dialog: {type: Boolean, default: false},
      value: Object
    },
    data: () => ({
    }),
    computed: {
      isDisable: function() {
        return this.value.name ? false : true;
      }
    },
    methods: {
      closeDialog() {
        this.$emit('cancel'); // Annuler toutes les modifications
      },
      commitAssociation() {
        this.$emit('save', this.value); // Enregistrer les modifications
      },
    },
  }
</script>
