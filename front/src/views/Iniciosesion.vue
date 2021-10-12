<template>
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
                    <h2 class="text-center">INICIAR SESIÓN</h2>
                    <v-img
                      src="../assets/birrete.png"
                      height="90"
                      contain
                    ></v-img>
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <v-text-field
                            label="Correo:"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-10"
                            v-model="email"
                            :rules="emailRules"
                            required
                          />
                          <v-text-field
                            label="Contraseña:"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            type="password"
                            v-model="password"
                            :rules="passwordRules"
                            required
                          />
                          <v-alert
                            border="left"
                            color="red lighten-2"
                            dark
                            v-model="showError"
                          >
                            {{ error }}
                          </v-alert>
                          <!-- <recupassword /> -->

                          <v-btn
                            :disabled="!valid"
                            color="blue"
                            dark
                            block
                            tile
                            v-on:click="loginFunction()"
                            >Entrar</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-card-text>
                </v-col>

                <!-- Para ir al registro-->

                <v-col cols="12" md="6" class="rgb(0, 0, 0, 0) rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">¿No tienes una cuenta? :o</h3>
                      <h6 class="text-center">
                        El botón de abajo te llevará al registro <br />
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
                      <h3 class="text-center">¿Ya tienes una cuenta? :D</h3>
                      <h6 class="text-center">
                        Pinchale aqui abajo, te llevará al inicio de sesión<br />
                        Bienvenido de vuelta :3
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--"
                        >Ir al inicio de sesión</v-btn
                      >
                    </div>
                  </div>
                </v-col>

                <!-- Formulario de registro -->

                <v-col
                  cols="12"
                  md="6"
                  class="white"
                  style="box-shadow: 5px 0px 5px 8px rgba(0, 0, 0, 0.419)"
                >
                  <v-card-text class="mt-12">
                    <h2 class="text-center">REGISTRO</h2>
                    <v-img
                      src="../assets/sign-up.png"
                      height="90"
                      contain
                    ></v-img>
                    <v-form ref="form" v-model="valid" lazy-validation>
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
                                v-model="name"
                                :rules="nameRules"
                                required
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
                                v-model="apellido"
                                :rules="apellidoRules"
                                required
                              />
                            </v-col>
                          </v-row>
                          <v-text-field
                            label="Correo:"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            v-model="correo"
                            :rules="correoRules"
                            required
                          />
                          <v-text-field
                            v-model="value"
                            label="Contraseña:"
                            outlined
                            dense
                            color="blue"
                            type="password"
                            :rules="valueRules"
                            required
                            loading
                          >
                            <template v-slot:progress>
                              <v-progress-linear
                                v-if="custom"
                                :value="progress"
                                :color="color"
                                absolute
                                height="8"
                              ></v-progress-linear>
                            </template>
                          </v-text-field>

                          <SuccessMessage
                            :message="successMessage"
                            :snackbar="successShow"
                            :close="closeSuccessDialog"
                          ></SuccessMessage>

                          <v-btn
                            :disabled="!valid"
                            color="blue"
                            dark
                            block
                            tile
                            @click="RegistroFunction()"
                            >Registrarse</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-form>
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
// import Recupassword from "./Recupassword.vue";
import { validateUser } from "../Services/Loginservice";
import { insert } from "../Services/Registro.service";
import SuccessMessage from "../components/SuccessMessage.vue";
export default {
  components: {
    // Recupassword,
    SuccessMessage,
  },
  data: () => ({
    valid: true,
    value: "",
    custom: true,
    name: "",
    nameRules: [(v) => !!v || "El nombre es necesario"],
    apellido: "",
    apellidoRules: [(v) => !!v || "El apellido también es necesario"],
    email: "",
    emailRules: [
      (v) => !!v || "El correo es necesario",
      (v) => /.+@.+\..+/.test(v) || "Eso no es un correo valido :c",
    ],
    correo: "",
    correoRules: [
      (v) => !!v || "Correo supremamente necesario e-e no te hagas rogar",
      (v) => /.+@.+\..+/.test(v) || "Eso no es un correo valido :c",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "La contraseña es necesaria",
      (v) =>
        (v && v.length >= 8) ||
        "La contraseña debe tener un minimo de 8 caracteres",
    ],
    valueRules: [
      (v) =>
        !!v || "A este punto ya te habrás dado cuenta que todo es necesario",
      (v) =>
        (v && v.length >= 8) ||
        "La contraseña debe tener un minimo de 8 caracteres",
    ],
    step: 1,
    showError: false,
    error: "",
    successMessage: "",
    successShow: false,
  }),
  props: {
    source: String,
  },
  computed: {
    // De aqui hasta...
    progress() {
      return Math.min(100, this.value.length * 13);
    },
    color() {
      return ["error", "warning", "success"][Math.floor(this.progress / 40)];
    },
    // aqui...es para la barra de progreso que aparece al ingresar una contraseña en el registro
  },
  methods: {
    openSuccessDialog(mensaje) {
      this.successMessage = mensaje;
      this.successShow = true;
    },
    closeSuccessDialog() {
      this.successShow = false;
      this.$router.push("/busqueda");
    },
    loginFunction() {
      validateUser(this.email, this.password)
        .then((response) => {
          const user = response.data;
          sessionStorage.setItem("correo", user.correo);
          sessionStorage.setItem("role", user.role);
          sessionStorage.setItem("log", true);
          this.$emit("logged", undefined);
          this.$router.push("/busqueda");
        })
        .catch((err) => {
          this.showError = true;
          this.error = err.response.data.message;
          setInterval(() => {
            this.showError = false;
          }, 3000);
        });
    },
    RegistroFunction() {
      const user = {
        nombre: this.name,
        apellido: this.apellido,
        correo: this.correo,
        contraseña: this.value,
      };
      insert(user)
        .then((response) => {
          this.openSuccessDialog(
            "Se ha creado el usuario: " + response.data._id
          );
        })
        .catch((err) => {
          this.showError = true;
          this.error = err.response.data.message;
          setInterval(() => {
            this.showError = false;
          }, 3000);
        });
    },
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
.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: rgba(164, 162, 197, 0.707) !important;
}
</style>
