<template>
  <v-data-table 
    :headers="headers" 
    :items="salles"
    hide-default-footer
    :search="search"
  >
  <template v-slot:top>
    <v-toolbar flat>
      <v-toolbar-title>Espaces de stockage</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-text-field 
        v-model="search" 
        append-icon="mdi-magnify" 
        label="Search" 
        hide-details
      ></v-text-field>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-btn color="primary" dark class="mb-2">
        Ajouter un espace
      </v-btn>
    </v-toolbar>
  </template>
  </v-data-table>
</template>

<script>
  export default {
    name: "SalleList",
    components: {
    },
    data() {
      return {
        search: '',
        headers: [
          {
            text: 'Nom de l\'espace',
            align: 'start',
            sortable: false,
            value: 'nom',
          },
          { text: 'Localisation dans l\'UTT', value: 'salle' }
        ],
        objects: [],
        owners: ['test', 'cerf'],
        categories: ['test', 'cerf'],
        materielTypes: ['test', 'cerf'],
      }
    },
    //mounted() {
    //  ObjectService.get().then(res => this.objects = res.data);
    //}
    
  }
</script>
