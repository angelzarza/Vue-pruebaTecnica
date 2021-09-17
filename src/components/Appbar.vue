<template>
  <v-app-bar dark>
    <v-app-bar-title
      ><v-img max-height="400px" max-width="200px" :src="logo"></v-img
    ></v-app-bar-title>
    <v-spacer></v-spacer>
    <v-avatar color="primary" size="40"
      ><v-img max-height="30px" max-width="30px" :src="avatar"></v-img
    ></v-avatar>
    <p class="mt-5 mx-3">Usuario</p>
  </v-app-bar>
</template>

<script>
export default {
  name: "Appbar",

  data: () => ({
    logo: require("@/assets/secretaligner.png"),
    avatar: require("@/assets/avatar.jpg"),
  }),
};
</script>

<style>
.v-app-bar-title__content {
  width: auto !important;
}
</style>
