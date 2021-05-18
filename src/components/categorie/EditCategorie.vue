<template>
  <v-row align="center" justify="space-around">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Nouvelle categorie</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="value.name"
                  label="Nom de la categorie*"
                  required
                  clearable
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
          <v-btn color="blue darken-1" id="add-btn" :disabled="isDisable" text @click="commitCategorie">
            Enregistrer
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
        return this.name ? true : false;
      }
    },
    methods: {
      closeDialog() {
        this.$emit('close', false);
      },
      commitCategorie() {
        this.$emit('close', this.value);
      },
    },
  }
</script>
