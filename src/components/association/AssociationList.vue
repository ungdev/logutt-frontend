<template>
  <v-data-iterator
    subheader
    :items="associations"
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
            <v-btn icon class="btn-icon">
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
                    <td>Kevin</td>
                    <td>cerf@utt</td>
                    <td>Con</td>
                    <td>
                      <v-btn icon class="btn-icon">
                        <v-icon color="grey lighten-1">mdi-square-edit-outline</v-icon>
                      </v-btn>
                      <!-- Icon de suppression d'un membre de l'asso -->
                      <VIconSuppression database="listeAsso" :donnees=association />
                    </td>
                  </tr>
                </tbody>
                <p>Mettre un bouton pour ajouter un etu à l'asso</p>
              </template>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-data-iterator>
</template>

<script>
import AssociationService from "../../service/association.service";
import VIconSuppression from "../VIconSuppression.vue";

export default {
  components: {
    VIconSuppression
  },
  props: {
    search: String,
  },
  data() {
    return {
      associations: [],
    };
  },
  methods: {
  },
  mounted() {
    AssociationService.get().then((res) => (this.associations = res.data));
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