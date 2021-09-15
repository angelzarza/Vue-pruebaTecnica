<template>
  <v-container>
    <v-row style="background-color: #dedede" class="mt-2">
      <v-col cols="12"> Listado de pacientes </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-icon color="black">mdi-card-account-details-outline</v-icon>
        <v-spacer></v-spacer>
        <h3>Listado de Pacientes</h3>
        <p style="color: grey">Visualizacion de pacientes</p>
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
        <ButtonsList />
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
import Search from "../components/Search";
import ButtonNew from "../components/ButtonNew";
import ButtonCSV from "../components/ButtonCSV";
import ButtonsViews from "../components/ButtonsViews";
import ButtonsList from "../components/ButtonsList";
import CardList from "../components/CardList";
import Pagination from "../components/Pagination";

export default {
  name: "List",

  components: {
    Search,
    ButtonNew,
    ButtonCSV,
    ButtonsViews,
    ButtonsList,
    CardList,
    Pagination,
  },
};
</script>
