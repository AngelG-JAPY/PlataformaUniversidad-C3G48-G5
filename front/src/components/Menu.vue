<template>
  <v-card class="contenedor" color="grey">
    <v-toolbar flat class="mainHeader">
      <v-toolbar-title>Universidades</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text><router-link to="/">Inicio</router-link></v-btn>
        <!-- <v-btn text><router-link to="/about">Acerca de</router-link></v-btn> -->
        <v-btn text><router-link to="/iniciosesion">Inicio sesion/Registro</router-link></v-btn>
        <v-btn text><router-link to="/ayuda">Ayuda</router-link></v-btn>
        <v-btn text><router-link to="/busqueda">Busqueda</router-link></v-btn>
        <v-btn text><router-link to="/noticias">Noticias</router-link></v-btn>
        <v-btn text><router-link to="/perfil">Perfil</router-link></v-btn>
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
                <v-list-item-title><router-link to="/iniciosesion">Inicio sesion/Registro</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><router-link to="/ayuda">Ayuda</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><router-link to="/busqueda">Busqueda</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><router-link to="/noticias">Noticias</router-link></v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><router-link to="/perfil">Perfil</router-link></v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    btns: [["Custom", "b-xl"]],
    colors: ["teal darken-1"],
  }),
};
</script>
