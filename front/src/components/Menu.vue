<template>
  <v-card class="contenedor" color="grey">
    <v-toolbar flat class="mainHeader" style="background: #ecf0f3;">
      <v-toolbar-title>Universidades</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <button text class="btn btn-lindu" ><router-link to="/" class="text">Inicio</router-link></button>

        <button text v-if="!menuProp" class="btn btn-lindu">
          <router-link to="/iniciosesion" class="text">Inicio sesión/Registro</router-link>
        </button>
        
        <v-btn text v-if="menuProp"
          ><router-link to="/ayuda">Ayuda</router-link></v-btn
        >
        <button id="btn3" v-if="!menuProp" type="button" class="btn btn-lindu" >
          <router-link  to="/ayuda" class="text">Ayuda</router-link>
        </button>
        
        <v-btn text v-if="menuProp"
          ><router-link to="/busqueda">Busqueda</router-link></v-btn
        >
        <v-btn text v-if="menuProp"
          ><router-link to="/noticias">Noticias</router-link></v-btn
        >
        <v-btn text v-if="menuProp"
          ><router-link to="/perfil">Perfil</router-link></v-btn
        >
        <v-btn text v-if="menuProp" @click="logOut()"
          >Cerrar Sesión</v-btn>
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
                <v-list-item-title
                  ><router-link to="/">Inicio</router-link></v-list-item-title
                >
              </v-list-item>
              <!-- <v-list-item>
                <v-list-item-title><router-link to="/about">Acerca de</router-link></v-list-item-title>
              </v-list-item> -->
              <v-list-item>
                <v-list-item-title v-if="!menuProp"
                  ><router-link to="/iniciosesion"
                    >Inicio sesion/Registro</router-link
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title v-if="menuProp"
                  ><router-link to="/ayuda"
                    >Ayuda</router-link
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title v-if="menuProp"
                  ><router-link to="/busqueda"
                    >Busqueda</router-link
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title v-if="menuProp"
                  ><router-link to="/noticias"
                    >Noticias</router-link
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title v-if="menuProp"
                  ><router-link to="/perfil"
                    >Perfil</router-link
                  ></v-list-item-title
                >
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
  props: {
    menuProp:{
      type: Boolean,
      default: false
    }
  },
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
    logOut() {
      sessionStorage.removeItem("correo");
      sessionStorage.removeItem("role");
      this.$emit("logged", false);
      this.$router.push("/");
      // window.location.reload();
    },
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
/* .btn-borde {
  padding: 0.375rem 0.75rem;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  color: #007bff;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
}

.btn-borde:hover,
.btn-borde:active,
.btn-borde:focus {
  color: #fff;
  background-color: #007bff;
} */

.v-toolbar__content {
     background: #ecf0f3 !important;
}
/* .btn-lindu{

  display:flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  background: #e5e5e5;
  background-size: 55px;
  margin-top: 5px;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  padding: 5px;
  border-radius: 10px;
  box-shadow: -10px -10px 15px #fff,
  10px 10px 15px #c1c1c1,
  inset 0px 0px 0px #fff,
  inset 0px 0px 0px #c1c1c1;
  transition: all 300ms ease;
}
.btn-lindu:hover{
  box-shadow: 0px 0px 0px #fff,
  0px 0px 0px #c1c1c1,
  inset -10px -10px 15px #fff,
  inset 10px 10px 10px #c1c1c1;
 

}
.text{
  text-shadow: 1px 1px 2px rgb(32, 63, 147);
  color: rgb(26, 72, 199);
}
.text:hover{
   color: rgb(26, 72, 199);
  text-shadow: 0px 0px 0px rgb(32,63,147);
} */

.btn-lindu{
  background: rgba(255,255,255,0.05);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  border-radius: 30px;
  color: #fff;
  z-index: 1;
  overflow:hidden;
  transition: 0.5s;
  backdrop-filter: blur(15px);
}
.btn-lindu:hover{
  letter-spacing:3px;
}
.btn .text ::before{ 
  /* agregar el otro contenedor */
  content: '';
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255,255,255,0.15), transparent);
  transform: skewX(45deg) translateX(0);
  transition:0.5s;
}
.btn:hover .text::before{
  /* aqui igual */
 transform: skewX(45deg) translateX(200%);
}
.btn::before{

}

a:-webkit-any-link {
  text-decoration: none;
}
</style>
