<template>
  <v-form>
    <v-text-field
      outlined
      filled
      append-icon="mdi-magnify"
      color="blue"
      placeholder="Buscar..."
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  name: "Search",

  data: () => ({}),
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
