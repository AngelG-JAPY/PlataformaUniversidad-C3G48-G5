<template>
  <v-contaier>
    <span class="fondo"></span>
    <v-row aling="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-8" color="white">
          <div class="text-end">
            <v-btn class="ma-2 text-end" outlined large fab color="indigo">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </div>
          <v-row no-gutters>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-card-text class="mt-12">
                <h2 class="text-center">Foto</h2>
                <div class="mt-5">
                  <v-img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC"
                    height="250"
                    contain
                  >
                  </v-img>
                </div>
              </v-card-text>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="6">
              <v-card-text class="mt-12">
                <h2 class="text-center">Tu Informacion</h2>

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
              </v-card-text>
              <div class="ml-4 mr-4" cols="4">
                <v-btn color="black" dark block>Cambio De Contraseña</v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" xs="12" md="5">
              <div class="ml-4 mr-4">
                <v-select
                  :items="items"
                  label="Tus Favoritos"
                  outlined
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" xs="6" md="5">
              <div class="ml-1 mr-4">
                <v-select :items="items" label="" outlined></v-select>
              </div>
            </v-col>
          </v-row>
          <v-row class="mb-5" justify="center">
            <v-col cols="6">
              <v-btn color="blue" dark block tile>GUARDAR</v-btn>
            </v-col>
          </v-row>
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
  /* background: url("https://media.istockphoto.com/photos/blue-background-picture-id996078816?k=20&m=996078816&s=612x612&w=0&h=RnDOSWqpE3SghSazzNztGF-w9pDg0PiQKuRRbLJcyEY=")
    no-repeat center center; */
  background-size: cover;
  background: linear-gradient(#a8daf0, #c9c9c9) !important;
  background-attachment: scroll;
}
</style>
