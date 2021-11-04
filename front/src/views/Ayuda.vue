<template>
  <v-container>
    <span class="fondo"></span>
    <v-row aling="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-8" color="white">
          <v-row>
            <v-col class="text-center">
              <H2>AYUDA</H2>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-center">
              <v-img src="../assets/ayudar.png" height="90" contain></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="text-center d-flex pb-4">
                <v-btn @click="all"> TODAS </v-btn>
                <div>{{ panel }}</div>
                <v-btn @click="none"> UNA </v-btn>
              </div>

              <v-expansion-panels v-model="panel" multiple>
                <v-expansion-panel>
                  <v-expansion-panel-header
                    ><b
                      >¿Debo pagar algún valor por la página? ...</b
                    ></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Por ahora no debeerás pagar ningún valor por el uso de la
                    página, es completamente gratuito.
                  </v-expansion-panel-content>
                  <v-expansion-panel-header
                    ><b>
                      Olvidé mi contraseña ¿Cómo puedo reestablecerla? ...</b
                    ></v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Para recuperar tu contraseña dirígete al módulo de inicio de
                    sesion y haz click en "Olvidé mi contraseña", luego sigue
                    las instrucciones que te enviaremos al correo. </v-expansion-panel-content
                  ><v-expansion-panel-header
                    ><b>
                      ¿Qué beneficios tiene adquirir este producto o servicio?
                      ...</b
                    >
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Podrás seleccionar tus universidades favoritas y tenerlas en
                    tu perfil disponibles a tu servicio, además estarás
                    actualizado con las noticias mas relevantes del mercado de
                    educación. </v-expansion-panel-content
                  ><v-expansion-panel-header
                    ><b>¿Cómo funciona? ...</b>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Creas una cuenta en nuestra plataforma, que te brindara
                    acceso a una pagina de búsqueda la cual le estableces unos
                    criterios de búsqueda según tu perfil.
                  </v-expansion-panel-content>
                  <v-expansion-panel-header
                    ><b>¿En cuánto tiempo tendré listo mi producto? ...</b>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    En el momento en que escojas tu favoritas podrás re
                    direccionarte a la pagina de la universidad que te interesó
                    para conocer mas … </v-expansion-panel-content
                  ><v-expansion-panel-header
                    ><b>¿Por qué debo utilizar esta plataforma?...</b>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Te brindamos la oportunidad de realizar búsqueda y filtro a
                    universidades para brindarte un mejor resultado
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="justify-center">
              <h4 class="text-center">
                ¿ No esta tu pregunta ? Dejanos saber cual es tu duda.
              </h4>
              <v-container>
                <v-textarea
                  counter
                  label="texto"
                  :rules="rules"
                  v-model="mensaje"
                ></v-textarea>
              </v-container>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="2">
              <v-btn explore @click="Preguntar()" color="primary"
                >Preguntar</v-btn
              >
              <v-alert sucess> {{ datos }} </v-alert>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { enviarCorreo } from "../Services/mail.controller";
export default {
  data() {
    return {
      panel: [],
      items: 5,
      mensaje: "",
      datos: "",
    };
  },

  methods: {
    Preguntar() {
      enviarCorreo(this.mensaje)
        .then(() => (this.datos = "mensaje enviado"))
        .catch((err) => (this.datos = "Error:" + err.response.data.mensaje));
    },
    // Create an array the length of our items
    // with all values as true
    all() {
      this.panel = [...Array(this.items).keys()].map((k, i) => i);
    },
    // Reset the panel
    none() {
      this.panel = [];
    },
  },
};
</script>

<style scoped>
.fondo {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  /* background: url("https://media.istockphoto.com/photos/blue-background-picture-id996078816?k=20&m=996078816&s=612x612&w=0&h=RnDOSWqpE3SghSazzNztGF-w9pDg0PiQKuRRbLJcyEY=")
    no-repeat center center; */
  background-size: cover;
  background: linear-gradient(#a8daf0, #c9c9c9) !important;
  background-attachment: scroll;
}
</style>
