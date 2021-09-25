<template>
  <v-main>
    <v-card class="mt-2 elevation-2">
      <v-carousel :show-arrows="true">
        <v-carousel-item
          v-for="(imagen, i) in imagenes"
          :key="i"
          :src="imagen.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-card>
    <v-row class="mt-10" justify="left">
      <v-col class="d-flex" cols="12" sm="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-select v-model="select" :pais="pais" label="Pais"></v-select>
          <v-select
            v-model="select"
            :departamento="departamento"
            label="Departamento"
          ></v-select>
          <v-select v-model="select" :ciudad="Ciudad" label="Ciudad"></v-select>
          <v-select v-model="select" :carrera="Carrera" label="Carrera"></v-select>

          <v-btn color="success" class="mr-4"> Buscar </v-btn>

          <v-btn color="error" class="mr-4"> Borrar Filtros </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  data(){
    return{


        
        pais: [
            'Colombia',
            
        ],

        departamento: [
            'Valle Del cauca',
            'Norte De Santander',
            'Cundinamarca',
            'Antioquia',
        ],
        ciudad: [
            'Cúcuta',
            'Bogota',
            'Medellin',
            'Cali',
        ],
        carrera: [
            'Ing En sistemas',
            'Administracion De Empresas',
            'Diseño Grafico',
            'Medicina',
        ],

        imagenes: [
            {
            src: "../assets/slbt3.jpg",
            },
            {
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            },
            {
            src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
            },
            {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
            },
        ],
    }
  },
};
</script>
<style>
body {
  background-color: black !important;
}
</style>