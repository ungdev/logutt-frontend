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
                  <v-icon> mdi-plus </v-icon> Nouvelle salle
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">Nouvelle salle de stockage</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="name"
                          label="Nom de la salle*"
                          required
                          clearable
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="room"
                          label="Numéro de la salle*"
                          hint="Exemple : N002"
                          persistent-hint
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
                  <v-btn color="blue darken-1" :disabled="isDisable" text @click="newSalle">
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
        <v-sheet min-height="70vh" rounded="lg">
          <!-- MAIN CARD START -->
          <v-list subheader one-line>
            <v-list-item v-for="salle in salles" :key="salle.name">  <!-- Boucle pour afficher les salles -->
              <v-list-item-avatar>
                <v-icon class="grey lighten-1" dark> mdi-factory </v-icon>
              </v-list-item-avatar>

              <v-row class="row">
                <v-col class="col-salle">
                  <v-list-item-content>
                    <v-list-item-title v-text="salle.name"></v-list-item-title>

                    <v-list-item-subtitle
                      v-text="salle.room"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
                <v-col class="col-salle col-salle-right">
                  <v-list-item-action class="list-item-action">
                    <v-btn icon class="btn-icon">
                      <v-icon color="grey lighten-1">mdi-square-edit-outline</v-icon>
                    </v-btn>

                    <!-- Icon de suppression d'un élément -->
                    <VIconSuppression database="listeSalle" :donnees=salle />

                  </v-list-item-action>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
          <!-- MAIN CARD STOP -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StorageService from "../service/storage.service";
import VIconSuppression from "./VIconSuppression.vue";

export default {
  name: "SalleList",
  components: {
    VIconSuppression
  },
  data() {
    return {
      formNew: false,
      validSupp: false,
      name: "",
      room: "",
      search: "",
      headers: [
        {
          text: "Nom de l'espace",
          align: "start",
          sortable: true,
          value: "name",
        },
        { text: "Localisation dans l'UTT", value: "room" },
      ],
      salles: [],
    };
  },
  mounted() {
    StorageService.get().then((res) => (this.salles = res.data));
  },

  methods: {
    newSalle: function () {
      StorageService.post({ name: this.name, room: this.room });
      this.closeModal();
    },

    closeModal: function () {
          this.formNew = false;
          this.name = '';
          this.room = '';
      }
  },

  computed: {
    isDisable: function() {
      if(this.name == '' || this.room == '') {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.salleList {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.col-salle {
  margin: 0;
}
.col-salle-right {
  text-align: right;
}

.list-item-action {
  text-align: right;
}

.star-required {
  color: red;
}
</style>