<template>
  <div class="busquedas">
    <v-row>
      <v-col v-for="busqueda in busquedas" :key="busqueda.code" md="4" sm="6">
        <v-card class="mx-auto" max-width="300">
          <v-img
            class="black--text align-end"
            height="200px"
            :src="
              busqueda.imageUrl == undefined
                ? 'https://www.webempresa.com/foro/wp-content/uploads/wpforo/attachments/3200/318277=80538-Sin_imagen_disponible.jpg'
                : busqueda.imageURL
            "
          >
            <v-card-title class="black--text">{{busqueda.nombre}}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0"> {{busqueda.pais}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{busqueda.ciudad}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text @click="leermas(busqueda.pagina)"> Saber mas </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import { getAllUniversidades } from "../Services/Busqueda.service";
export default {
  data() {
    return {
      busquedas: [],
    };
  },
  mounted() {
    getAllUniversidades()
      .then((response) => {
        this.busqueda = response.data;
      })
      .catch((err) => console.error(err));
  },
  methods: {
    leermas(pagina) {
      this.$router.push(`${pagina}`);
    },
  },


};
</script>

<style></style>
