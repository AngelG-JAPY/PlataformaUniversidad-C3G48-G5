<template>
  <v-app>
<<<<<<< HEAD
    <Menu :menuProp="dataAppLoggedIn" @logged="userLoggedIn"/>

    <v-main>
      <v-container fluid>
        <router-view  @logged="userLoggedIn"></router-view>
=======
    <Menu :isLogged="loggedIn" />

    <v-main>
      <v-container fluid>
        <router-view v-on:logged="userLoggedIn"></router-view>
>>>>>>> 2962c0725c176fe591258f1f965746fb4c5fa4d6
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
<<<<<<< HEAD
      dataAppLoggedIn: false,
=======
      loggedIn: false,
>>>>>>> 2962c0725c176fe591258f1f965746fb4c5fa4d6
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
      this.title = this.drawer ? "Mi otra pagina" : "Cesar's page";
    },
    userLoggedIn(loggedIn) {
<<<<<<< HEAD
      this.dataAppLoggedIn = loggedIn;
=======
      this.loggedIn = loggedIn;
>>>>>>> 2962c0725c176fe591258f1f965746fb4c5fa4d6
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
