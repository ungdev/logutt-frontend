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
          v-for="objet in items"
          :key="objet.id"
        >
          <v-expansion-panel-header>
            <strong>{{ objet.name }}</strong>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-btn icon class="btn-icon" @click="show()">
              <v-icon color="grey lighten-1">mdi-plus-box</v-icon>
            </v-btn>
            <v-btn icon class="btn-icon" @click="openDialogEditObject(objet)">
              <v-icon color="grey lighten-1">mdi-square-edit-outline</v-icon>
            </v-btn>
            <!-- Icon de suppression d'un élément -->
            <VIconSuppression database="listeObject" :donnees=objet />
            
            <v-row>
              <v-col cols="6" sm="6" md="6">
                <p>Catégorie : {{ getCategorieNameById(objet.category_id) }}</p>
              </v-col>
              <v-col cols="6" sm="6" md="6">
                <p>Sous-catégorie :</p>
              </v-col>
            </v-row>

            <!-- Tableau des membres de l'assoc qui ont des accès sur LogUTT -->
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">#</th>
                    <th class="text-left">Propriétaire</th>
                    <th class="text-left">Quantité</th>
                    <th class="text-left">Lieu de stockage</th>
                    <th class="text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>333</td>
                    <td>BDE</td>
                    <td>4</td>
                    <td>Salle Ev</td>
                    <td>
                      <v-btn icon class="btn-icon">
                        <v-icon color="grey lighten-1">mdi-square-edit-outline</v-icon>
                      </v-btn>
                      
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









  <!--<v-data-iterator
    subheader
    :items="objects"
    item-key="id"
    :search="search"
  >
    <template v-slot:default="{ items }">
      <v-list
        subheader
        two-line
      >
        <v-list-item 
          v-for="objet in items"
          :key="objet.id"
        >
          <v-list-item-avatar>
            <v-icon
              class="grey lighten-1"
              dark
            >
              mdi-folder
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="objet.name"></v-list-item-title>

            <v-list-item-subtitle v-text="objet.lendable"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon @click="openDialogEditObject(objet)">
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </template>
  </v-data-iterator>-->
</template>

<script>

import {category as CategoryService, objectInstance as ObjetInstanceService} from "../../service/logUTT.service";
import VIconSuppression from "../VIconSuppression.vue";

export default {
    name: "ObjectList",
    components: {
      VIconSuppression
    },
    props: {
      value: Array,
      search: String,
    },
    data: () => ({
      instancesObject: {},
      categories: [],
    }),
    methods: {
      openDialogEditObject(object) {
        this.$emit('openDialogEditObject', object);
      },

      add(object) {
        ObjetInstanceService.post(object.id, {
          identifier: "Wazoooooo", object_id: 1, association_id: 3, storage_id: 1
        })
      },

      show() {
        this.objects.forEach(objet => {
          ObjetInstanceService.get(objet.id).then((res) => (
            console.log(res.data)
          ));
        });
        console.log("finito");
      },

      getCategorieNameById(categorieId) {
        const categorieName = this.categories.find(categorie => categorie.id == categorieId);
        return categorieName ? categorieName.name : 'sans catégorie';
      },
    },
    mounted() {
      CategoryService.get().then((res) => (this.categories = res.data));
    },
  }
</script>

<style lang="scss">
  
</style>