<template>
  <v-container>
    <v-card>
      <v-card-title>
        Pacientes
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:[`item.datos_paciente.nombre`]="{ item }"
          >{{ item.datos_paciente.nombre }}
          {{ item.datos_paciente.apellidos }}</template
        >
        <template v-slot:[`item.ficha_dental.estado`]="{ item }">
          <v-chip :color="getColor(item.ficha_dental.estado)" dark>
            {{ item.ficha_dental.estado }}
          </v-chip>
        </template>
        <template v-slot:[`item.options`]>
          <v-select v-model="selectDefault" :items="drop"></v-select>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import usersData from "../assets/json/pacientes.json";

export default {
  name: "CardList",
  data() {
    return {
      search: "",
      users: usersData,

      selectDefault: "Editar",
      drop: ["Editar", "Finalizar", "Borrar"],
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
        { text: "Acciones", value: "options" },
      ],
    };
  },

  methods: {
    getColor(state) {
      if (state == "planificando") return "red";
      else if (state == "facturado") return "orange";
      else if (state == "solicitado") return "blue";
      else if (state == "fabricando") return "grey";
      else return "green";
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
