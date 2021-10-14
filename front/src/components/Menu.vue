<template>
  <v-card class="contenedor" color="grey">
    <v-toolbar flat class="mainHeader" style="background: #fff;">
      <v-toolbar-title>
        
        <img src="../assets/logo.png" class="logo"  alt="">
        
        
        
        
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <button text class="btn btn-lindu" ><router-link to="/" class="text">Inicio</router-link></button>

        <button text v-if="!menuProp" class="btn btn-lindu">
          <router-link to="/iniciosesion" class="text">Inicio sesión/Registro</router-link>
        </button>
        
        <!-- <v-btn text v-if="menuProp"
          ><router-link to="/ayuda">Ayuda</router-link></v-btn
        > -->
        <button id="btn3" v-if="menuProp" type="button" class="btn btn-lindu" >
          <router-link  to="/ayuda" class="text">Ayuda</router-link>
        </button>
        
        <button  v-if="menuProp" type="button" class="btn btn-lindu" >
          <router-link  to="/busqueda" class="text">Busqueda</router-link>
        </button>

        <button  v-if="menuProp" type="button" class="btn btn-lindu" >
          <router-link  to="/noticias" class="text">Noticias</router-link>
        </button>
        <button  v-if="menuProp" type="button" class="btn btn-lindu" >
          <router-link  to="/perfil" class="text">Perfil</router-link>
        </button>
        <button text v-if="menuProp" class="btn btn-lindu" @click="logOut()"
          ><span class="text">Cerrar Sesión</span></button>
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



.logo{
  display: block;
  position: flex;
  width: 25%;
  height: 25%;
}



.btn-lindu {
  margin-top: 5px;
  margin-bottom: 8px;
  margin-left: 8px;
  margin-right: 8px;
  display:flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  cursor: pointer;
  border-bottom:#2196F3 5px solid;
  
  border-radius: 5px;
  box-shadow:  0px 15px 10px -15px #2196F3 ;
  position: relative;
}

.text{
  font-size: 18px;
  text-decoration: none;
  color: #2196F3;
  text-shadow: 0 0 2px hsl(0 0% 100% / 0.3), 0 0 2px currentColor;

}

.btn-lindu::before {
  pointer-events: none;
  content: "";
  position: absolute;
  background: #2196F3;
  

  top: 12px;
  left: 0;
  width: auto;
  height:auto;

  transform: perspective(2px) rotateX(40deg) scale(1, 0.35);
  filter: blur(5px);
  opacity: 0.7;
}

.btn-lindu::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 5px 2px #2196F3;
  opacity: 0;
  background-color: #2196F3;
  z-index: -1;
  transition: opacity 100ms linear;
}

.btn-lindu:hover,
.btn-lindu:focus {
  color: #fff;
  text-shadow: none;
  
}
.text:focus{
    color: #f32121;
    
}
.text:hover {
  color: #fff;
  text-shadow: none;
}

.btn-lindu:hover::before,
.btn-lindu:focus::before {
  opacity: 1;
}
.btn-lindu:hover::after,
.btn-lindu:focus::after {
  opacity: 1;
}

a:-webkit-any-link {
  text-decoration: none;
}
</style>
