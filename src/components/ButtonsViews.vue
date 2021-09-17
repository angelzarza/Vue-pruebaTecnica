<template>
  <div class="mx-4">
    <v-btn icon color="black" x-small class="mx-1">
      <v-icon>mdi-reorder-horizontal</v-icon>
    </v-btn>
    <v-btn icon color="black" x-small class="mx-1">
      <v-icon>mdi-view-grid-outline</v-icon>
    </v-btn>
    <v-btn icon color="black" x-small class="mx-1">
      <v-icon size="17">5</v-icon>
    </v-btn>
    <v-btn icon color="black" x-small class="mx-1">
      <v-icon size="17">10</v-icon>
    </v-btn>
    <v-btn icon color="black" x-small class="mx-1">
      <v-icon size="17">15</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonsViews",

  data: () => ({}),
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
