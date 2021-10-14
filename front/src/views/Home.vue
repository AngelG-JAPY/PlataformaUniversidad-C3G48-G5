<template>
  <body class="imagen">
    <v-container>
      <v-row justify="center" id="contenedor">
        <v-col cols="12" xs="12" md="6">
          <div class="mt-15">
            <p>
              promover la busqueda de univerisdades para aquellos jovenes y
              adultos
              <br />
              que desean encontrar la mejor opcion para realizar su educacion
              superior,
              <br />
              encontrando en nuestro sitio un gran portafolio de posibles
              opciones.
            </p>
          </div>
        </v-col>

        <v-col cols="12" xs="12" md="6">
          <carousel-3d
            :controls-visible="false"
            :clickable="true"
            :height="300"
          >
            <slide :index="i" :key="i" v-for="(slide, i) in slides">
              <br />
              <img :src="slide.src" />
              <br />
              <span text color="white">{{ slide.text }}</span>
            </slide>
          </carousel-3d>
        </v-col>
      </v-row>
      <br />
      <br />
      <br />
      <v-row>
        <v-col cols="12" md="12">
          <div>
            <v-text-field
              label="Nombre"
              v-model="name"
              hide-details="auto"
            ></v-text-field>
            <v-text-field label="Email" v-model="email"></v-text-field>
            <v-textarea
              filled
              name="input-7-4"
              label="Descripcion"
              v-model="description"
            ></v-textarea>
            <v-btn depressed color="blue" @click="insertContact()">
              Enviar
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12">
          <div>
            <h4>
              Contactanos
            </h4>
            <p id="iconos">
              Colombia Bogotá (60 1) 343 00
              <br />
              Medellín (60 4) 510 90
              <br />Cali(60 2) 554 05 <br />Cartagena (60 5) 693 44 <br />Desde
              el exterior +57 (60 1) 343 00
            </p>
            <v-icon>mdi-facebook</v-icon>
            <v-icon>mdi-twitter</v-icon>
            <v-icon>mdi-whatsapp</v-icon>
            <v-icon>mdi-instagram</v-icon>
            <v-icon>mdi-youtube</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </body>
</template>

<script>
import { crearContacto } from "../Services/Contactos.service";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  data: () => ({
    sms: [],
    name: "",
    email: "",
    description: "",
    slides: [
      { src: require("../assets/img/andes.jpg"), text: "U. Andes" },
      { src: require("../assets/img/antioquia.jpg"), text: "U. Antioquia" },
      { src: require("../assets/img/unacional.png"), text: "U. Nacional" },
      {
        src: require("../assets/img/upb.jpg"),
        text: "U. Pontificia Bolivariana",
      },
    ],
  }),
  components: {
    Carousel3d,
    Slide,
  },
  methods: {
    insertContact() {
      const contacto = {
        name: this.name,
        email: this.email,
        description: this.description,
      };
      crearContacto(contacto)
        .then(() => {
          console.log(`Mensanje enviado`);
        })
        .catch((err) => console.error(err));
    },
    // consultarsms(){
    //   const asyn sms =[
    //   ]
    // }
  },
};
</script>

<style scoped>
.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.next span,
.prev span {
  color: orange;
}
p {
  padding-top: 77px;
}
span {
  text-align: center !important;
}

#contenedor {
  margin-top: 20px;
}
.imagen {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  background: linear-gradient(#a8daf0, #c9c9c9) !important;
  opacity: 0.9 !important;
}

#iconos {
  padding-top: 41px;
}
</style>
