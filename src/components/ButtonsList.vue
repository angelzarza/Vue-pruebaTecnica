<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="ma-2" text x-small>
          Nombre y Apellidos
          <v-icon>mdi-swap-vertical</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn class="ma-2" text x-small>
          Clínica
          <v-icon>mdi-swap-vertical</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn class="ma-2" text x-small>
          Dirección
          <v-icon>mdi-swap-vertical</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn class="ma-2" text x-small>
          Estado
          <v-icon>mdi-swap-vertical</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn class="ma-2" text x-small>
          Acciones
          <v-icon>mdi-swap-vertical</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ButtonsList",

  data: () => ({}),
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
