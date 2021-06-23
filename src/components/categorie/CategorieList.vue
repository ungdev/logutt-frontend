<template>
  <v-data-iterator
    subheader
    :items="value"
    item-key="id"
    :search="search"
  >
    <template v-slot:default="{ items }">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="categorie in items" :key="categorie.id">
          <v-expansion-panel-header>
            {{ categorie.name }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
              <v-btn icon class="btn-icon" @click="openDialogNewSubCategorie(categorie)">
                <v-icon color="grey lighten-1">mdi-plus-box</v-icon>
              </v-btn>
              <v-btn icon class="btn-icon" @click="openDialogEditCategorie(categorie)">
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
              </template>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-data-iterator>
</template>

<script>
import VIconSuppression from "../VIconSuppression.vue";

export default {
  name: "CategorieList",
  components: {
    VIconSuppression
  },
  props: {
    value: Array,
    search: String,
  },
  data() {
    return {
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
  methods: {
    openDialogEditCategorie(categorie) {
      this.$emit('openDialogEditCategorie', categorie);
    },
    openDialogNewSubCategorie(parentCategorie) {
      this.$emit('openDialogNewSubCategorie', parentCategorie);
    },
  },
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