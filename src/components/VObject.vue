<template>
  <v-container>
    <h1 v-text="object.name" />
    <p v-text="object.description" />
  </v-container>
</template>

<script>
export default {
  name: "RwvObject",
  props: {
    object: { type: Object, required: true }
  },
};
</script>