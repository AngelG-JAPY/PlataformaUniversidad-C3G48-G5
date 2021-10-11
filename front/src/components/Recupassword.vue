<template>
  <v-app>
    <!-- <v-row justify="center"> -->
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-list-item
          v-bind="attrs"
          v-on="on"
          class="caption blue--text"
          @click="alerta"
          >Olvidé mi contraseña</v-list-item
        >
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h5">Recupera Tu contraseña</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
              <small>A su correo llegara los pasos a seguir</small>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="ok = true"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- </v-row> -->

    <!-- <v-row justify="center"> -->
    <v-dialog v-model="ok" max-width="350">
      <v-card>
        <v-card-title class="text-h5">
          Correo de recuperacion enviado
        </v-card-title>

        <v-card-text>
          Por favor revise y siga los pasos indicados
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Aceptar
          </v-btn>
          <v-btn color="green darken-1" text @click="ok = false">
            cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- </v-row> -->
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    ok: false,
  }),
};
</script>
<style>
.v-application--wrap {
  min-height: 100%;
}
</style>
