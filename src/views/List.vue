<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="6">
        <div style="display: flex">
          <div class="mx-4">
            <v-icon color="black">mdi-card-account-details-outline</v-icon>
          </div>
          <div>
            <h2>Listado de Pacientes</h2>
            <p style="color: grey">Visualizacion de pacientes</p>
          </div>
        </div>
      </v-col>

      <v-col cols="6">
        <Search @updateSearch="searchText = $event" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <ButtonNew />
        <ButtonCSV />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <CardList :search="searchText" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Componentes vista principal
import Search from "../components/Search";
import ButtonNew from "../components/ButtonNew";
import ButtonCSV from "../components/ButtonCSV";
import CardList from "../components/CardList";

export default {
  name: "List",

  data: () => ({
    // Variable que se comunica con el :search de la tabla CardList
    searchText: "",
  }),

  components: {
    Search,
    ButtonNew,
    ButtonCSV,
    CardList,
  },
};
</script>
