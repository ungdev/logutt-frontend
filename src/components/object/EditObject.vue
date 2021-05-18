<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span v-if="value.id" class="headline">{{ this.value.name }}</span>
          <span v-else class="headline">Nouvel object</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="8"
              >
                <v-text-field
                  v-model="value.name"
                  label="Nom*"
                  dense
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  v-model="value.category_id"
                  :items="categories"
                  item-text="name"
                  item-value="id"
                  label="Catégorie*"
                  dense
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  v-model="value.description"
                  dense
                  label="Description"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-checkbox
                  v-model="value.lendable"
                  label="Prêtable"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <small><span class="star-required">*</span> indiquez les champs requis</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeDialog()"
          >
            Annuler
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="closeAndSaveDialog()"
          >
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
    name: "EditObject",
    props: {
      dialog: {type: Boolean, default: false},
      value: Object,
      categories: Array,
    },
    methods: {
      closeDialog() {
        this.$emit('close', false);
      },
      closeAndSaveDialog() {
        this.$emit('close', this.value);
      }
    },
  }
</script>
