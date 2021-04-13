<template>
  <v-container>
    <RwvObject v-for="(object) in objects" :object="object" :key="object.id"/>
  </v-container>
</template>

<script>
  import ObjectService from '../service/object.service';
  import RwvObject from "./VObject";
  export default {
    name: "RwvObjectList",
    components: {
      RwvObject,
    },
    data() {
      return {
        objects: [],
      }
    },
    mounted() {
      ObjectService.get().then(res => this.objects = res.data);
    }
    
  }
</script>
