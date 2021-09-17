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
        <Search />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <ButtonNew />
        <ButtonCSV />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <ButtonsViews />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <CardList />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <Pagination />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Componentes vista principal
import Search from "../components/Search";
import ButtonNew from "../components/ButtonNew";
import ButtonCSV from "../components/ButtonCSV";
import ButtonsViews from "../components/ButtonsViews";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

export default {
  name: "List",

  components: {
    Search,
    ButtonNew,
    ButtonCSV,
    ButtonsViews,
    CardList,
    Pagination,
  },
};
</script>
