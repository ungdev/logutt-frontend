<template>
  <v-data-iterator
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
  </v-data-iterator>
</template>

<script>
import ObjectService from "../../service/logutt/object.service";
  export default {
    name: "ObjectList",
    props: {
      search: String,
    },
    methods: {
      openDialogEditObject(object) {
        this.$emit('openDialogEditObject', object);
      },
    },
    data: () => ({
      objects: [],
    }),
    mounted() {
      ObjectService.get().then((res) => (this.objects = res.data));
    },
  }
</script>

<style lang="scss">
  
</style>