<template>
  <v-data-iterator
    subheader
    :items="salles"
    item-key="id"
    :search="search"
  >
    <template v-slot:default="{ items }">
      <v-list subheader one-line>
        <v-list-item v-for="salle in items" :key="salle.name">  <!-- Boucle pour afficher les salles -->
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
                <v-btn icon class="btn-icon" @click="openDialogEditSalle(salle)">
                  <v-icon color="grey lighten-1">mdi-square-edit-outline</v-icon>
                </v-btn>

                <!-- Icon de suppression d'un élément -->
                <VIconSuppression database="listeSalle" :donnees=salle />

              </v-list-item-action>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </template>
  </v-data-iterator>
</template>

<script>
import StorageService from "../../service/storage.service";
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
  methods: {
    openDialogEditSalle(salle) {
      this.$emit('openDialogEditSalle', salle);
    },
  },
  mounted() {
    StorageService.get().then((res) => (this.salles = res.data));
  },
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

.v-list-item__content {
  padding-top: 28px!important;
}

.col-salle-right {
  max-width: 60px!important;
}
</style>