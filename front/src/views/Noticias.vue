<template>
 
  <v-app >
     <v-parallax
      style="width:100%;"
      dark
      src="https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-news-interview-camera-microphone-cartoon-background-image_58927.jpg"
    > 
    <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">Noticias</h1>
          <h4 class="subheading">¡¡Enterate de las novedades de cada universidad!! </h4>
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


      <!-- <v-col cols="12" sm="12" lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="data:image/jpeg;base64,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"
            height="200px"
          ></v-img>

          <v-card-title> GRAN EVENTO ESTE VIERNES </v-card-title>

          <v-card-subtitle> Mas de mil personas asistiran </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="blue"
              href="https://www.youtube.com/channel/UC_Hb-oO8XlU0xh-ry0idI1A/featured"
              text
            >
              Leer Mas
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
     
      <v-col cols="12" sm="12" lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://www.uao.edu.co/wp-content/uploads/2020/05/Vive-la-UAO-745x410.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Evento cultural en la autonoma </v-card-title>

          <v-card-subtitle> La universidad Autonoma de occidente... </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="blue"
              href="https://www.youtube.com/channel/UC_Hb-oO8XlU0xh-ry0idI1A/featured"
              text
            >
              Leer Mas
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show2 = !show2">
              <v-icon>{{
                show2 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNYGe_UgpJqQMLXB1U_aCbpBsHh2KhGxcHg&usqp=CAU"
            height="200px"
          ></v-img>

          <v-card-title> Facultad de medicina </v-card-title>

          <v-card-subtitle> La facultad de medicina de la universidad de antioquia... </v-card-subtitle>

          <v-card-actions>
            <v-btn
              color="blue"
              href="https://www.youtube.com/channel/UC_Hb-oO8XlU0xh-ry0idI1A/featured"
              text
            >
              Leer Mas
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show3 = !show3">
              <v-icon>{{
                show3 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>

              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col> -->
    <!-- </v-row> -->
  </v-app>
</template>

<script>

// import { getAllProducts } from "../../services/Noticias.service";
import noticiasList from "../components/noticiasList";
export default {
  components: {
    noticiasList,
    
   },
  data() {
    
  },
  
  
};
// export default {
//   data: () => {

//     return {
//       noticias:[]
//     }

//     // show: false,
//     // show1: false,
//     // show2: false,
//     // show3: false,
//   },
//   mounted(){
//     getAllNoticias()
//     .then((response) => {
//       this.noticias = response.data;
//     })
//     .catch((err) => console.error(err));
//   }
// };
</script>

<style scoped>
</style>