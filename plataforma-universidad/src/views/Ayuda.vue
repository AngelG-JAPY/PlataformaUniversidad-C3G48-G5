<template>
  <v-contaier>
    <v-layout class= "primary" aling="center" justify="center">
      <v-flex class ="secondary" cols="12" sm="10">
        <v-card class="elevation-6 mt-8" color="white">
          <v-window v-model="step"> 
<v-row>
                 <v-row>
                
                </v-row>
              <v-col cols="12" md="6" class="white">
                <v-card-text class="mt-12">
                  <h2 class="text-center">Foto</h2>
                  <v-img
                    src="/Users/macbook/Documents/MINTIC/Ciclo3/PlataformaUniversidad-C3G48-G5/plataforma-universidad/src/assets/Unknown.png"
                    height="90"
                    contain
                  ></v-img>

                  <v-row align="center" justify="center">
                    <v-col cols="12" sm="8">
                      <v-text-field
                        label="Correo:"
                        outlined
                        dense
                        color="blue"
                        autocomplete="false"
                        class="mt-10"
                      />
                      <v-text-field
                        label="Contraseña:"
                        outlined
                        dense
                        color="blue"
                        autocomplete="false"
                        type="password"
                      />
                      <v-row>
                        <v-col cols="12" sm="7">
                          <span class="caption blue--text"
                            >Olvide mi contraseña</span
                          >
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="7">
                          <v-checkbox
                            label="Mantener sesion activa"
                            class="mt-n1"
                            color="blue"
                          >
                          </v-checkbox>
                        </v-col>
                      </v-row>
                      <v-btn color="blue" dark block tile>Entrar</v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>

              <!-- Para ir al registro-->

              <v-col cols="12" md="6" class="rgb(0, 0, 0, 0) rounded-bl-xl">
               <div>
                   <h1>hellow word</h1>
                </div>
              </v-col>
            </v-row>
          </v-window>
        </v-card>
      </v-flex>
    </v-layout>
  </v-contaier>
</template>
<script>
export default {};
</script>
<style scoped>
</style>