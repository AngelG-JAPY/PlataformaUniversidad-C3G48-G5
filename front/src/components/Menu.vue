<template>
  <v-card class="contenedor" color="grey">
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>Universidades</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text><router-link to="/">Inicio</router-link></v-btn>
        <v-btn text v-if="!isLoggedIn"><router-link to="/iniciosesion">Inicio sesion/Registro</router-link></v-btn>
        <v-btn text v-if="isLoggedIn"><router-link to="/ayuda" >Ayuda</router-link></v-btn>
        <button id="btn3" v-if="!isLoggedIn"  type="button"><router-link class="btn btn-borde" to="/ayuda" >Ayuda</router-link></button>
        <v-btn text v-if="isLoggedIn"><router-link to="/busqueda">Busqueda</router-link></v-btn>
        <v-btn text v-if="isLoggedIn"><router-link to="/noticias">Noticias</router-link></v-btn>
        <v-btn text v-if="isLoggedIn"><router-link to="/perfil">Perfil</router-link></v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-row justify="space-around">
          <v-menu
            v-for="[text, rounded] in btns"
            :key="text"
            :rounded="rounded"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-app-bar-nav-icon
                v-on="on"
                @click.stop="drawer = !drawer"
              ></v-app-bar-nav-icon>
            </template>

            <v-list>
              <v-list-item>
                <v-list-item-title><router-link to="/">Inicio</router-link></v-list-item-title>
              </v-list-item>
              <!-- <v-list-item>
                <v-list-item-title><router-link to="/about">Acerca de</router-link></v-list-item-title>
              </v-list-item> -->
              <v-list-item>
                <v-list-item-title v-if="!isLoggedIn"><router-link to="/iniciosesion">Inicio sesion/Registro</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title v-if="isLoggedIn"><router-link to="/ayuda">Ayuda</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title v-if="isLoggedIn"><router-link to="/busqueda">Busqueda</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title v-if="isLoggedIn"><router-link to="/noticias">Noticis</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title v-if="isLoggedIn"><router-link to="/perfil">Perfil</router-link></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
// import login from "./login.vue";
export default {
  //  components: {
  //   login,
  // },
  name: "Menu",
  data: () => {
     return {
      showLogin: false,
      btns: [["Custom", "b-xl"]],
      colors: ["teal darken-1"],
    
    };

    
    
  },
  methods: {
    switchDrawer() {
      this.$emit("switch-drawer", !this.drawer);
    },
    logOut(){
      sessionStorage.removeItem("correo");
      sessionStorage.removeItem("role");
      window.location.reload();
    }
  },
  computed: {
    isLoggedIn() {
      const username = sessionStorage.getItem("correo");
      return username != undefined;
    },
  },
};
</script>
<style scoped>
.btn-borde {
  padding: .375rem .75rem;
  border: 1px solid #007bff;
  border-radius: .25rem;
  color: #007bff;
  transition: color .15s ease-in-out,
    background-color .15s ease-in-out;
}

.btn-borde:hover, .btn-borde:active, .btn-borde:focus {
  color: #fff;
  background-color: #007bff;
}
a:-webkit-any-link {
    
    text-decoration: none;
}
</style>