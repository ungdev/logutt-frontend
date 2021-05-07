<template>
  <v-container class="grey lighten-3">
    <v-row>
      <v-col cols="12" sm="4">
        <v-sheet min-height="20vh" rounded="lg">
          <!-- SUB CARD START -->
          <v-text-field
            v-model="search"
            label="Rechercher"
            filled
            rounded
            style="padding: 10px"
          ></v-text-field>

          <v-row align="center" justify="space-around">
            <v-dialog v-model="formNew" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  <v-icon> mdi-plus </v-icon> Nouvelle categorie
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Nouvelle categorie</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="name"
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
                  <v-btn color="blue darken-1" text @click="closeModal">
                    Annuler
                  </v-btn>
                  <v-btn color="blue darken-1" :disabled="isDisable" text @click="newCategorie">
                    Ajouter
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
          <!-- SUB CARD END -->
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8">
          <v-row justify="center" class="categorieList">
            <v-expansion-panels popout>
              <v-expansion-panel
                v-for="categorie in this.categories" :key="categorie.id">
                <v-expansion-panel-header>
                  {{ categorie.name }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-btn icon class="btn-icon">
                              <v-icon color="grey lighten-1">mdi-square-edit-outline</v-icon>
                            </v-btn>
                  <!-- Icon de suppression d'un élément -->
                  <VIconSuppression database="listeCategorie" :donnees=categorie />

                  <!-- Tableau des membres de l'assoc qui ont des accès sur LogUTT -->
                  <v-simple-table dense>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Nom de la sous catégorie</th>
                          <th class="text-left">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Enceinte</td>
                          <td>
                            <v-btn icon class="btn-icon">
                              <v-icon color="grey lighten-1">mdi-square-edit-outline</v-icon>
                            </v-btn>
                            <!-- Icon de suppression d'une sous catégorie -->
                            <VIconSuppression database="listeCategorie" :donnees=categorie /> <!-- A MODIFIER POUR SUPP UNE SOUS CATÉ -->
                          </td>
                        </tr>
                      </tbody>
                      <p>Mettre un bouton pour ajouter une sous catégorie</p>
                    </template>
                  </v-simple-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CategoryService from "../../service/category.service";
import VIconSuppression from "../VIconSuppression.vue";

export default {
  name: "CategorieList",
  components: {
    VIconSuppression
  },
  data() {
    return {
      formNew: false,
      name: "",
      search: "",
      headers: [
        {
          text: "Nom de la catégorie",
          align: "start",
          sortable: true,
          value: "name",
        },
      ],
      categories: [],
    };
  },
  mounted() {
    CategoryService.get().then((res) => (this.categories = res.data));
  },

  methods: {
    newCategorie: function () {
      CategoryService.post({ name: this.name });
      this.closeModal();
    },

    closeModal: function () {
          this.formNew = false;
          this.name = '';
      }
  },

  computed: {
    isDisable: function() {
      if(this.name == '') {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.categorieList {
  padding: 12px;
}

.col-categorie {
  margin: 0;
}
.col-categorie-right {
  text-align: right;
}

.list-item-action {
  text-align: right;
}

.star-required {
  color: red;
}
</style>