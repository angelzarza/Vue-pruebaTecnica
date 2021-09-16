<template>
  <v-container>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import usersData from "../assets/json/pacientes.json";

export default {
  name: "CardList",
  data() {
    return {
      users: usersData,
      headers: [
        {
          text: "Nombre y Apellidos",
          value: "datos_paciente.nombre",
        },
        { text: "Clínica", value: "ficha_dental.clinica" },
        {
          text: "Objetivo Tratamiento",
          value: "ficha_dental.acadas_tratamiento",
        },
        { text: "Estado", value: "ficha_dental.estado" },
        { text: "Acciones", value: "ficha_dental.estado" },
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

  // mounted: function () {
  //   const axios = require("axios");
  //   axios
  //     .get("http://localhost:8080/angelzarza/prueba-tecnica/db")
  //     .then((response) => {
  //       this.db = response.data;
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
