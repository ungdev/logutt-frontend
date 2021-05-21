<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span v-if="value.id" class="headline">Modifier le matériel</span>
          <span v-else class="headline">Nouvel matériel</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <!-- DEBUT ligne nom + fichier image -->
            <v-row>
              <v-col cols="12" sm="6" md="8">
                <v-text-field
                  v-model="value.name"
                  label="Nom*"
                  outlined
                  clearable
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-file-input label="Image" outlined dense></v-file-input>
              </v-col>
            </v-row>
            <!-- FIN ligne nom + fichier image -->

            <!-- DEBUT ligne catégorie + sous catégorie -->
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  v-model="value.category_id"
                  :items="categories"
                  item-text="name"
                  item-value="id"
                  label="Catégorie*"
                  outlined
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  v-model="value.category_id"
                  :items="categories"
                  item-text="name"
                  item-value="id"
                  label="Sous-catégorie"
                  outlined
                  disabled
                ></v-select>
              </v-col>
            </v-row>
            <!-- FIN ligne catégorie + sous catégorie -->

            <!-- Description -->
            <v-textarea
              v-model="value.description"
              outlined
              label="Description"
            ></v-textarea>

            <!-- Checkbox pretable -->
            <v-checkbox v-model="value.lendable" label="Prêtable"></v-checkbox>
            <small><span class="star-required">*</span> indiquez les champs requis</small>
          </v-container>   
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel()">
            Annuler
          </v-btn>
          <v-btn color="blue darken-1" :disabled="isDisable" text @click="save()">
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
    dialog: { type: Boolean, default: false },
    value: Object,
    categories: Array,
  },
  computed: {
    isDisable: function() {
      console.log(this.value);
      if (this.value.name && this.value.category_id) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel", false);
    },
    save() {
      this.$emit("save", this.value);
    },
  },
};
</script>
