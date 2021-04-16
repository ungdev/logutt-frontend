<template>
  <v-data-table 
    :headers="headers" 
    :items="objects" 
    :items-per-page="5" 
    :search="search"
  >
  <template v-slot:top>
    <v-toolbar flat>
      <v-toolbar-title>Object List</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-text-field 
        v-model="search" 
        append-icon="mdi-magnify" 
        label="Search" 
        hide-details
      ></v-text-field>
      <v-combobox
        v-model="selectOwners"
        :items="owners"
        label="Owner"
        multiple
        outlined
        dense
        hide-details
      ></v-combobox>
      <v-combobox
        v-model="selectCategories"
        :items="categories"
        label="Categories"
        multiple
        outlined
        dense
        hide-details
      ></v-combobox>
      <v-combobox
        v-model="selectMaterielTypes"
        :items="materielTypes"
        label="Materiel types"
        multiple
        outlined
        dense
        hide-details
      ></v-combobox>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-btn color="primary" dark class="mb-2">
        New Item
      </v-btn>
    </v-toolbar>
  </template>
  </v-data-table>
</template>

<script>
  import ObjectService from '../service/object.service';
  export default {
    name: "RwvObjectList",
    components: {
    },
    data() {
      return {
        search: '',
        selectOwners: '',
        selectCategories: '',
        selectMaterielTypes: '',
        headers: [
          {
            text: 'name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Description', value: 'description' },
          { text: 'Category id', value: 'category_id' },
          { text: 'lendable', value: 'lendable' },
          { text: 'created_at', value: 'created_at' },
          { text: 'updated_at', value: 'updated_at' },
        ],
        objects: [],
        owners: ['test', 'cerf'],
        categories: ['test', 'cerf'],
        materielTypes: ['test', 'cerf'],
      }
    },
    mounted() {
      ObjectService.get().then(res => this.objects = res.data);
    }
    
  }
</script>
