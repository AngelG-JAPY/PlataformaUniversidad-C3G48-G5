<template >
  <v-container>
    <span class="background"></span>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-8" color="rgba(14, 2, 247, 0.2)">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6" class="white">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">INICIAR SESION</h2>
                    <v-img                
                      src="../assets/birrete.png"
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
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">No tienes una cuenta? :o</h3>
                      <h6 class="text-center">
                        El boton de abajo te llevara al registro <br />
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++"
                        >Ir a registrarme</v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>

            <!-- Para ir al inicio de sesion -->

            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="rgb(0, 0, 0, 0) rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Ya tienes una cuenta? :D</h3>
                      <h6 class="text-center">
                        Pinchale aqui abajo, te llevara al inicio de sesion<br />
                        Bienvenido de vuelta :3
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--"
                        >Ir al inicio de sesion</v-btn
                      >
                    </div>
                  </div>
                </v-col>

                <!-- Formulario de registro -->

                <v-col cols="12" md="6" class="white" style="box-shadow: 5px 0px 5px 8px rgba(0, 0, 0, 0.419); ">
                  <v-card-text class="mt-12">
                    <h2 class="text-center">REGISTRO</h2>
                    <v-img
                      
                      src="../assets/sign-up.png"
                      height="90"
                      contain
                    ></v-img>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Nombre:"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              label="Apellido:"
                              outlined
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Correo:"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                        />
                        <v-text-field
                          label="Contraseña:"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          type="password"
                        />

                        <v-btn color="blue" dark block tile>Registrarse</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>
<style scoped>
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  background: url("https://media.istockphoto.com/photos/blue-background-picture-id996078816?k=20&m=996078816&s=612x612&w=0&h=RnDOSWqpE3SghSazzNztGF-w9pDg0PiQKuRRbLJcyEY=")
    no-repeat center center;
  background-size: cover;
  background-color: grey;
  /* /* transform: scale(1.1); */
}

.v-application .rounded-bl-xl {
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.419);
  /* background: rgba(14, 2, 247, 0); */
  /* border-bottom-left-radius: 100px !important; */
}
.v-application .rounded-br-xl {
    box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.419);
  /* border-bottom-right-radius: 300px !important; */
}
</style>