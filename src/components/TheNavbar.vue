<template>
        <nav id="menu">
            <ul id="menu-closed">
                <!--<li><img src="../assets/images/logo_logutt.jpg" alt="logo LogUTT" class="logo-logutt"></li>-->
                <li><router-link to="/liste-materiel" class="texte-menu">Matériel</router-link></li>
                <li><router-link to="/calendrier" class="texte-menu">Calendrier</router-link></li>
                <li><router-link to="/prets" class="texte-menu">Prêts</router-link></li>
                <li><router-link to="/liste-categories" class="texte-menu">Catégories</router-link></li>
                <li><router-link to="/liste-associations" class="texte-menu">Associations</router-link></li>
                <li><router-link to="/equipe-log" class="texte-menu">Équipe log</router-link></li>
                <li><router-link to="/liste-salles" class="texte-menu">Espaces de stockage</router-link></li>
                <li>
                  <div class="user-name">
                    <v-icon> mdi-account </v-icon>{{ this.currentUser.firstName }} {{ this.currentUser.lastName }}
                  </div>
                </li>
                <li><a href="#menu-closed">&#215; Fermer</a></li>
                <li><a href="#menu" class="case-menu-phone">&#9776; Menu</a></li>
            </ul>
        </nav>
</template>


<script>
  import Auth from "../common/auth.js";
    export default {
        name: "Menu",
        data () {
            return {
                publicPath: process.env.BASE_URL,
                currentUser: Auth.getCurrentUser()
            }
        },
        methods: {
          deconnexion() {
            console.log("cerf");
          }
        },
    };
</script>

<style scoped lang="scss">
nav {
  font-size: 14px;
  background-color: white;
  margin: 0 0 3em;
  padding-left: 2em;
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

nav li { 
  display: inline-block; 
}

nav a, .user-name {
  display: inline-block;
  padding: 0 1em;
  color: rgb(25, 118, 210);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 55px; /* Menu height */
  height: 55px; /* Menu height */
}


nav a:hover { 
    background: rgba(25,118,210,1);
    color: white;
    border-radius: 20px;
 }

nav li:last-child { /* The menu button */
  position: absolute; /* Move the menu button out of flow */
  right: 0;
  bottom: 55px; /* Move upwards, the same distance as the menu height */
  background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(25,118,210,1) 27%);
  padding-left: 3em;
}

nav .case-menu-phone {
  color: white;
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

</style>