<template>
   <v-app>

     <Menu/>
     <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>


<script>
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';

export default {
  components:{
    Menu,
    Footer
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

</style>
