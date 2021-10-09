<template>
  <div class="products">
    <v-container>
      <h1>Product list</h1>

      <v-row>
        <v-col v-for="noticia in noticias" :key="noticia.code" md="4" sm="6">
          <v-card elevation="2" class="mx-auto">
            <v-card-title>{{ noticia.name }}</v-card-title>
            <v-card-subtitle
              ><b>Price:</b> $ {{ noticia.decripcion }}
            </v-card-subtitle>
            <v-card-subtitle><b>Categories:</b></v-card-subtitle>
            <v-chip-group column>
              <v-chip v-for="Etiqueta in noticia.Etiqueta" :key="Etiqueta">
                {{ Etiqueta }}
              </v-chip>
            </v-chip-group>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getAllNoticias} from "../services/Noticias.service"
export default {
    data() {
    return {
      noticias: [],
    };
  },
  mounted() {
    getAllNoticias()
      .then((response) => {
        this.noticias = response.data;
      })
      .catch((err) => console.error(err));
  },

};

</script>

<style></style>
