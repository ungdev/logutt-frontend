<template>
  <div class="listeAsso">
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel v-for="asso in listeAssos" :key="asso.nomAsso">
          <v-expansion-panel-header> {{asso.nomAsso}} </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- Tableau des membres de l'assoc qui ont des accès sur LogUTT -->
            <v-simple-table dense>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"> Nom Prénom</th>
                    <th class="text-left">
                      Email
                    </th>
                  <th class="text-left">
                    Rôle
                  </th>
                  <th class="text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="etu in membres" :key="etu.name">
                  <td>{{ etu.name }}</td>
                  <td>{{ etu.email }}</td>
                  <td>{{ etu.role }}</td>
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
export default {
  name: 'AssoList',

  data () {
    return {
      listeAssos:[
        {
          nomAsso: "BDE UTT",
        },
        {
          nomAsso: "GALA UTT",
        },
        {
          nomAsso: "UNG",
        },
        {
          nomAsso: "Média",
        },
        {
          nomAsso: "Argentique",
        },
        {
          nomAsso: "Puls",
        },
        {
          nomAsso: "Genius",
        },
        {
          nomAsso: "Junior Conseil UTT",
        },
      ],
      membres: [
        {
          name: 'Frozen Yogurta',
          email: "cerf@utt.fr",
          role: "administrateur",
        },
        {
          name: 'Frozen Yozgurt',
          email: "cerf@utt.fr",
          role: "administrateur",
        },
        {
          name: 'Frozen Yoguert',
          email: "cerf@utt.fr",
          role: "administrateur",
        },
        {
          name: 'Frozen Yogrurt',
          email: "cerf@utt.fr",
          role: "administrateur",
        },
        {
          name: 'Frozen Ytogurt',
          email: "cerf@utt.fr",
          role: "administrateur",
        },
        {
          name: 'Frozen Yogyurt',
          email: "cerf@utt.fr",
          role: "administrateur",
        },
        {
          name: 'Frozen Yoguurt',
          email: "cerf@utt.fr",
          role: "administrateur",
        },
        {
          name: 'Frozen Yoguirt',
          email: "cerf@utt.fr",
          role: "administrateur",
        },
      ],
    }
  },
}

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