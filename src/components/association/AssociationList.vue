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
          v-for="association in items"
          :key="association.id"
        >
          <v-expansion-panel-header>
            {{ association.name }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn icon class="btn-icon" @click="openDialogEditAssociation(association)">
              <v-icon color="grey lighten-1">mdi-square-edit-outline</v-icon>
            </v-btn>
            <!-- Icon de suppression d'un élément -->
            <VIconSuppression database="listeAsso" :donnees=association />

            <!-- Tableau des membres de l'assoc qui ont des accès sur LogUTT -->
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Nom Prénom</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Rôle</th>
                    <th class="text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Leclerc Oscar</td>
                    <td>oscar.leclerc@utt</td>
                    <td>Admin</td>
                    <td>
                      <v-btn icon class="btn-icon">
                        <v-icon color="grey lighten-1">mdi-square-edit-outline</v-icon>
                      </v-btn>
                      <!-- Icon de suppression d'un membre de l'asso -->
                      <VIconSuppression database="listeAsso" :donnees=association />
                    </td>
                  </tr>
                </tbody>
                <!-- Mettre un bouton pour ajouter un etu à l'asso -->
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
  components: {
    VIconSuppression
  },
  props: {
    value: Array,
    search: String,
  },
  data: () => ({
    }),
  methods: {
    openDialogEditAssociation(association) {
      this.$emit('openDialogEditAssociation', association);
      console.log(association);
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