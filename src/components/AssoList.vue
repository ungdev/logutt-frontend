<template>
  <div class="listeAsso">
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel v-for="association in this.associations" :key="association.id">
          <v-expansion-panel-header>
            {{ association.name }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
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
                    <td>Modifier --- Supprimer</td>
                  </tr>
                </tbody>
                <p>Mettre un bouton pour ajouter un etu à l'asso</p>
              </template>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>


<script>
import AssociationService from '../service/association.service';
export default {
  name: 'AssoList',

  data() {
    return {
        associations: [],
    };
  },
  mounted() {
    AssociationService.get().then(res => {
      this.associations = res.data
    });
  }
  
};
</script>

<style lang="scss">
  .listeAsso {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  v-form {
    background-color: white;
  }
</style>