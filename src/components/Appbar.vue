<template>
  <v-app-bar dark>
    <v-app-bar-title>SECRETALIGNER</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-avatar color="primary" size="40">PT</v-avatar>
    <p class="mt-5 mx-3">Usuario</p>
  </v-app-bar>
</template>

<script>
export default {
  name: "Appbar",

  data: () => ({}),
};
</script>

<style>
.v-app-bar-title__content {
  width: auto !important;
}
</style>
