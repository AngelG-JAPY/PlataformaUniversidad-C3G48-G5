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
          title="BIENVENIDO"
        ></v-carousel-item>
      </v-carousel>
    </v-card>

    <!-- Acá inicia el formulario de busqueda -->

    <!-- <v-form ref="form" v-model="valid" lazy-validation>

          <v-select v-model="select" :items="pais" label="Pais"></v-select>

          <v-select
            v-model="select"
            :items="departamento"
            label="Departamento"
          ></v-select>

          <v-select v-model="select" :items="Ciudad" label="Ciudad"></v-select>
          
          <v-select
            v-model="select"
            :items="Carrera"
            label="Carrera"
          ></v-select>

          <v-btn color="success" class="mr-4"> Buscar </v-btn>

          <v-btn color="error" class="mr-4"> Borrar Filtros </v-btn>
        </v-form> -->

    <v-row class="mt-10" justify="center">
        <div class="busquedas md-5" >
          <v-row  justify="center" >
            <v-col
              v-for="busqueda in busquedas"
              :key="busqueda.code"
              class="ml-2 md-2"
              md="4"
              lg="3"
              sm="6"
              
            >
              <v-card class="mx-auto" max-width="500" min-width="200"> 
                <v-img
                  class="black--text align-end"
                  height="200px"
                  :src="
                    busqueda.imageUrl != undefined
                      ? busqueda.imageUrl
                      : 'https://www.webempresa.com/foro/wp-content/uploads/wpforo/attachments/3200/318277=80538-Sin_imagen_disponible.jpg'
                    "
                >
                  
                </v-img>
                <v-card-title class="black--text">{{ busqueda.nombre }}</v-card-title>

                <v-card-subtitle class="pb-0">
                  {{ busqueda.pais }}</v-card-subtitle
                >

                <v-card-text class="text--primary">
                  <div>{{ busqueda.ciudad }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text @click="leermas(busqueda.pagina)">
                    Saber mas
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </div>
      
    </v-row>
  </v-main>
</template>

<script>
import { getAllUniversidades } from "../Services/Busqueda.service";
// import busquedalist from "../components/busquedaList.vue";
export default {
  // components: {
  //   busquedalist,
  // },

  data() {
    return {
      busquedas: [],
      // pais: ["Colombia"],

      // departamento: [
      //   "Valle Del cauca",
      //   "Norte De Santander",
      //   "Cundinamarca",
      //   "Antioquia",
      // ],
      // ciudad: ["Cúcuta", "Bogota", "Medellin", "Cali"],
      // carrera: [
      //   "Ing En sistemas",
      //   "Administracion De Empresas",
      //   "Diseño Grafico",
      //   "Medicina",
      // ],
      // items:[
      // ],

      imagenes: [
        {
          src: require("../assets/sl1.jpg"),
        },
        {
          src: require("../assets/sl2.jpg"),
        },
        {
          src: require("../assets/sl3.jpg"),
        },
        {
          src: require("../assets/slbt3.jpg"),
        },
      ]
    };
  },
  mounted() {
    getAllUniversidades()
      .then((response) => {
        this.busquedas = response.data;
      })
      .catch((err) => console.error(err))
  },
  methods: {
    leermas(pagina) {
      this.$router.push(`${pagina}`);
    },
    // getAllUniversidades()
    //   .then((response) => {
    //     this.busqueda = response.data;
    //   })
    //   .catch((err) => console.error(err)),
  },

};
</script>
<style scoped>
body {
  background-color: black !important;
}
</style>
