<template>
  <div>
    <TheNavbar/>

    <v-form ref="form" class="form-new-asso" lazy-validation>
      <v-text-field class="field-name" id="inputName" label="Nom nouvelle association" required></v-text-field>

      <v-btn color="success" class="btn btn-add mr-4" @click="newAsso"> + </v-btn>
    </v-form>

    <AssoList/>
  </div>

</template>


<script>
  import AssoList from '../components/AssoList.vue';
  import TheNavbar from '../components/TheNavbar.vue';

  export default {
    name: 'ViewAssoList',

    components:{
      AssoList,
      TheNavbar
    },

    methods: {
      newAsso: function () {
        var saisie = document.getElementById("inputName").value;
        if(saisie) {
          console.log(saisie);
        } else {
          console.log("impossible champs vide")
        }
      }
    },
  }
</script>

<style lang="scss">
  .form-new-asso {
    display: flex;
    width: 20%;
  }

  .field-name {
    width: 90%;
  }

  .btn-add {
    width: 10%;
  }

</style>