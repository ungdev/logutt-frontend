<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default { }

</script>


<style lang="scss">
  .v-application--wrap {
    background: #333;
  }


  @keyframes textColor {
    0% {color: tomato;}
    30% {color: gold;}
    60% {color: lime;}
    90% {color: turquoise;}
    100% {color: tomato;}
  }

  .btn {
    text-transform: uppercase;
    font-size: .7em;
    font-weight: bold;
    will-change: transform;
    border: none;
    text-decoration: none;
    background-color: grey;
    color: white;
    padding: 1% 2%;
    letter-spacing: .05rem;
    transition: .3s ease-in-out;
    border-radius: 1rem;
    /*box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3), 0 10px 10px rgba(0, 0, 0, 0.22);*/
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3), 0 10px 10px rgba(255, 255, 255, 0.22);
  }
  
  .btn:hover {
    /*box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);*/
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.19), 0 6px 6px rgba(255, 255, 255, 0.23);
    transform: scale(.95);
  }
  
</style>
