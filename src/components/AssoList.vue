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
                  <v-icon> mdi-plus </v-icon> Nouvelle association
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Nouvelle association</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="name"
                          label="Nom de l'association*"
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
                  <v-btn color="blue darken-1" :disabled="isDisable" text @click="newAssociation">
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
          <v-row justify="center" class="listeAsso">
            <v-expansion-panels popout>
              <v-expansion-panel
                v-for="association in this.associations"
                :key="association.id"
              >
                <v-expansion-panel-header>
                  {{ association.name }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
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
          </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import AssociationService from "../service/association.service";
import VIconSuppression from "./VIconSuppression.vue";

export default {
  name: "AssoList",
  
  components: {
    VIconSuppression
  },
  
  data() {
    return {
      associations: [],
      formNew: false,
      name: '',
      search: '',
    };
  },
  mounted() {
    AssociationService.get().then((res) => {
      this.associations = res.data;
    });
  },

  methods: {
      newAssociation: function () {
        if(this.name) {
          AssociationService.post({ "name" : this.name });
          this.closeModal();
        }
      },

      closeModal: function () {
          this.formNew = false;
          this.name = ''
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

  .listeAsso {
    padding: 12px;
  }

</style>