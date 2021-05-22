<template>
  <v-row align="center" justify="space-around">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span v-if="value.id" class="headline">{{ this.value.name }}</span>
          <span v-else-if="value.parent_id" class="headline">Nouvelle sous-catégorie</span>
          <span v-else class="headline">Nouvelle catégorie</span>
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
          <v-btn color="blue darken-1" text @click="cancel">
            Annuler
          </v-btn>
          <v-btn color="blue darken-1" id="add-btn" :disabled="isDisable" text @click="save">
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
      cancel() {
        this.$emit('cancel', false);
      },
      save() {
        this.$emit('save', this.value);
      },
    },
  }
</script>
