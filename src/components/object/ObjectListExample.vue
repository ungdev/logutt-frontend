<template>
  <v-container>
    <v-data-table 
      :headers="headers" 
      :items="objects"
      hide-default-footer
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
          <v-btn color="primary" dark class="mb-2" @click="openDialog()">
            New Item
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="openDialog(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>
    <EditObject :dialog="dialogNewObject" v-model="this.selectedObject" :categories="categories" @close="closeDialog"/>
  </v-container>
</template>

<script>
  import ObjectService from '../../service/logutt/object.service';
  import CategoryService from '../../service/logutt/category.service';
  import EditObject from './EditObject';
  export default {
    name: "ObjectList",
    components: {
      EditObject,
    },
    data() {
      return {
        dialogNewObject: false,
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
          { text: 'id', value: 'id' },
          { text: 'Description', value: 'description' },
          { text: 'Category id', value: 'category_id' },
          { text: 'lendable', value: 'lendable' },
          { text: 'created_at', value: 'created_at' },
          { text: 'updated_at', value: 'updated_at' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        objects: [],
        oldObject: {},
        selectedObject: {},
        owners: ['test', 'cerf'],
        categories: [],
        materielTypes: ['test', 'cerf'],
      }
    },
    methods: {
      openDialog(object) {
        this.selectedObject = object ? {...object} : {};
        this.oldObject = object;
        this.dialogNewObject = true;
      },
      closeDialog() {
        if (this.selectedObject.id) {
          this.checkObjectChange();
        } else {
          this.createObject();
        }
        this.selectedObject, this.oldObject = {};
        this.dialogNewObject = false;
      },
      async checkObjectChange() {
        if (JSON.stringify(this.selectedObject) === JSON.stringify(this.oldObject)) {
          return
        }
        ObjectService.update(this.selectedObject.id, {...this.selectedObject});
        Object.assign(this.oldObject, this.selectedObject);
      },
      createObject() {
        ObjectService.post({...this.selectedObject})
        this.objects.push({...this.selectedObject});
      }
    },
    mounted() {
      ObjectService.get().then(res => this.objects = res.data);
      CategoryService.get().then(res => this.categories = res.data);
    }
  }
</script>
