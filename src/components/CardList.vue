<template>
  <v-container>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="db"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CardList",
  data() {
    return {
      db: [],
      headers: [
        {
          text: "Nombre y Apellidos",
          value: "datos_paciente",
        },
        // { text: "Clínica", value: "email" },
        // { text: "Objetivo Tratamiento", value: "username" },
        // { text: "Estado", value: "phone" },
        // { text: "Acciones", value: "website" },
      ],
      // items: [
      //   {
      //     name: "Frozen Yogurt",
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: "1%",
      //   },
      // ],
    };
  },

  mounted: function () {
    const axios = require("axios");

    axios
      .get(
        "http://localhost:8080/angelzarza/prueba-tecnica/607de0be7232c/datos_paciente"
      )
      .then((response) => {
        this.db = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
