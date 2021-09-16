<template>
  <vue-json-to-csv :json-data="users" :csv-title="'Pacientes'">
    <v-btn outlined color="blue" class="ma-2 white--text">
      Descargar CSV
      <v-icon right dark> mdi-download </v-icon>
    </v-btn>
  </vue-json-to-csv>
</template>

<script>
// Importar el componente para exportar a CSV
import VueJsonToCsv from "vue-json-to-csv";
import usersData from "../assets/json/pacientes.json";

export default {
  name: "ButtonCSV",

  data: () => ({
    users: usersData,
  }),
  components: {
    VueJsonToCsv,
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
