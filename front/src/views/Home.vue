<template>
  <v-container>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <div>
      <v-text-field label="Nombre" hide-details="auto"></v-text-field>
      <v-text-field label="Email"></v-text-field>
      <v-textarea filled name="input-7-4" label="Descripcion"></v-textarea>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "plataforma-universidad/src/assets/andes.jpg",
        },
        {
          src: "plataforma-universidad/src/assets/antioquia.jpg",
        },
        {
          src: "plataforma-universidad/src/assets/5004a-upb.jpg",
        },
        {
          src: "plataforma-universidad/src/assets/unacional.png",
        },
      ],
    };
  },
};
</script>
