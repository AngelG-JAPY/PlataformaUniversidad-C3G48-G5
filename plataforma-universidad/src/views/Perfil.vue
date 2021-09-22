<template>
  <v-contaier>
    <span class="fondo"></span>
    <v-row aling="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-8" color="white">
          <v-window v-model="step">
            <v-layout>
              <v-flex xs12>
                <div class="text-end">
                  <v-btn
                    class="ma-2 text-end"
                    outlined
                    large
                    fab
                    color="indigo"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
            <v-layout xs12>
              <v-flex xs12>
                <v-card-text class="mt-12">
                  <h2 class="text-center">Foto</h2>
                  <v-img
                    src="/Users/macbook/Documents/MINTIC/Ciclo3/PlataformaUniversidad-C3G48-G5/plataforma-universidad/src/assets/Unknown.png"
                    height="90"
                    contain
                  >
                  </v-img>
                </v-card-text>
              </v-flex>
              <v-flex xs12>
                <v-card-text class="mt-12">
                  <h2 class="text-center">Tu Informacion</h2>
                  <v-layout justify-center>
                    <v-flex xs12 md8 class="text-center">
                      <v-text-field
                        label="Nombre:"
                        outlined
                        dense
                        color="blue"
                        autocomplete="false"
                        class="mt-6"
                      />
                      <v-text-field
                        label="Apellido"
                        outlined
                        dense
                        color="blue"
                        autocomplete="false"
                        class="mt-2"
                      />

                      <v-text-field
                        label="Correo:"
                        outlined
                        dense
                        color="blue"
                        autocomplete="false"
                        class="mt-2"
                      />
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-flex xs4>
                <v-card>
                  <v-btn color="blue" dark block tile
                    >Cambio De Contraseña</v-btn
                  >
                </v-card>
              </v-flex>
            </v-layout>
            <v-layout justify-center>
              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  :items="items"
                  label="Tus Favoritas"
                  outlined
                ></v-select>
              </v-col>
            </v-layout>
            <v-layout justify-center mb-4>
              <v-flex xs2>
                <v-card>
                  <v-btn color="blue" dark block tile>GUARDAR</v-btn>
                </v-card>
              </v-flex>
            </v-layout>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-contaier>
</template>
<script>
export default {};
</script>
<style scoped>
.fondo {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background: url("https://media.istockphoto.com/photos/blue-background-picture-id996078816?k=20&m=996078816&s=612x612&w=0&h=RnDOSWqpE3SghSazzNztGF-w9pDg0PiQKuRRbLJcyEY=")
    no-repeat center center;
  background-size: cover;
  background-color: grey;
}
</style>