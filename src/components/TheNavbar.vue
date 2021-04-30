<template>
        <nav id="menu">
            <ul id="menu-closed">
                <li><img src="../assets/images/logo_logutt.jpg" alt="logo LogUTT" class="logo-logutt"></li>  
                <li><router-link to="/liste-materiel" class="texte-menu">Matériel</router-link></li>
                <li><router-link to="/liste-associations" class="texte-menu">Associations</router-link></li>
                <li><router-link to="/liste-salles" class="texte-menu">Espaces de stockage</router-link></li>
                <li><router-link to="/contact" class="texte-menu">Nous contacter</router-link></li>
                <li><a href="#menu-closed">&#215; Close menu</a></li>
                <li><a href="#menu">&#9776; Menu</a></li>
            </ul>
        </nav>
</template>


<script>
    export default {
        name: "Menu",
        data () {
            return {
                publicPath: process.env.BASE_URL
            }
        }
    };
</script>

<style scoped lang="scss">
nav {
  font-size: 14px;
  background-color: rgb(38, 47, 85);
  box-shadow: 0 1px 2px rgba(19, 51, 61, 0.5);
  margin: 0 0 3em;
  padding: 0 1em;
  height: 55px; /* Menu height */
  overflow: hidden; /* Don't show anything outside the nav */
}

nav ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-height: 110px; /* Menu height x 2 */
  position: relative; /* Position the menu button relative to this item */
}

nav li { display: inline-block; }

nav a {
  display: inline-block;
  padding: 0 1em;
  color: white;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 55px; /* Menu height */
  height: 55px; /* Menu height */
  margin-left: 4px;
  margin-right: 4px;
}

nav a:hover { background-color: rgba(255, 255, 255, 0.08); 
    border-radius: 20px;
 }

nav li:last-child { /* The menu button */
  position: absolute; /* Move the menu button out of flow */
  right: 0;
  bottom: 55px; /* Move upwards, the same distance as the menu height */
  background-image: linear-gradient(to right, rgba(38, 47, 85, 0) 0, rgba(38, 47, 85, 1) 2em);
  padding-left: 3em;
}

nav li:nth-last-child(2) { /* The close button */ display: none; }

nav#menu:target {
  height: auto;
  padding: 0;
}

nav#menu:target ul { max-height: none; }

nav#menu:target li { display: block; }

nav#menu:target a {
  display: block;
  padding: 0 2em;
  background-color: rgba(255, 255, 255, 0.05);
}

nav#menu:target a:hover { background-color: rgba(255, 255, 255, 0.08); }

nav#menu:target li:not(:first-child) { margin-top: 2px; }

nav#menu:target li:last-child { display: none; }

nav#menu:target li:nth-last-child(2) {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  border-left: 2px solid rgb(19, 51, 61);
}

.logo-logutt {
    width: 40px;
    margin-right: 15px;
    margin-left: 15px;
}

</style>













<!--<template>
<div>
  <v-app-bar
      app
      color="white"
      flat
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>
    </v-app-bar>

    
</div>
  
</template>


<script>
  export default {
    name: 'TheNavbar',

    data: () => ({
      drawer: false,
      group: null,

      links: [
        'Matériel',
        'Calendrier',
        'Prêts',
      ],
    }),
  }

</script>-->