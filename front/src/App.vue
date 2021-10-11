<template>
  <v-app>
    <Menu />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";

export default {
  components: {
    Menu,
    Footer,
  },
  data() {
    return {
      title: "Mi pagina",
      drawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
      this.title = this.drawer ? "Mi otra pagina" : "Cesar's page";
    },
  },
};
</script>
<style>
body {
  margin: 0px;
}
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #ffffff;
}

body::-webkit-scrollbar {
  width: 12px;
  background-color: #ffffff;
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #0d6efd;
}
</style>
