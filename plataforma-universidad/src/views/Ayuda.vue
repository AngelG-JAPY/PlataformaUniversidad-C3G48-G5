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
                <v-expansion-panel v-for="(item, i) in items" :key="i">
                  <v-expansion-panel-header
                    >Header {{ item }}</v-expansion-panel-header
                  >
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                  :value="value"
                ></v-textarea>
              </v-container>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="2">
              <v-btn explore @click="Preguntar()" color="primary"
                >Preguntar</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      panel: [],
      items: 5,
    };
  },
  methods: {
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

  background: url("https://media.istockphoto.com/photos/blue-background-picture-id996078816?k=20&m=996078816&s=612x612&w=0&h=RnDOSWqpE3SghSazzNztGF-w9pDg0PiQKuRRbLJcyEY=")
    no-repeat center center;
  background-size: cover;
  background-color: grey;
  background-attachment: scroll;
}
</style>c