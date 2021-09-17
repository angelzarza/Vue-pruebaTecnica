<template>
  <v-app>
    <Appbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// Barra de navegación fija para todas las páginas
import Appbar from "./components/Appbar.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),

  components: {
    Appbar,
  },
};
</script>
