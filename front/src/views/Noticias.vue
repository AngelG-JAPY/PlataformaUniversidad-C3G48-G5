<template>
  <v-app>
    <v-parallax
      style="width:100%;"
      dark
      src="https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-news-interview-camera-microphone-cartoon-background-image_58927.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">Noticias</h1>
          <h4 class="subheading">
            ¡¡Enterate de las novedades de cada universidad!!
          </h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-row>
      <v-col cols="12" sm="12" lg="6" md="4" class="ml-10">
        <v-radio-group v-model="row" row>
          <v-radio label="Todas" value="radio-1"></v-radio>
          <v-radio label="Solo favoritas" value="radio-2"></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <noticiasList />
  </v-app>
</template>

<script>
import noticiasList from "../components/noticiasList";
export default {
  components: {
    noticiasList,
  },
  data() {
    return {
      noticias: [],
    };
  },
};
</script>

<style scoped></style>
