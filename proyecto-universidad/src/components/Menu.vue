<template>
  <v-card  class="contenedor" color="grey" >
    <v-toolbar flat class="mainHeader"  >
      <v-toolbar-title>Photography</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text><router-link to="/">Home</router-link></v-btn>
        <v-btn text><router-link to="/about">About</router-link></v-btn>
        <v-btn text><router-link to="/contact">Contact</router-link></v-btn>
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
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Acerca de:</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Inicio sesion/Registro</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title></v-list-item-title>
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
  name: 'Menu',
  data: () => ({
    btns: [["Custom", "b-xl"]],
    colors: ["teal darken-1"],
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
