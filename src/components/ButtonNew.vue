<template>
  <v-dialog transition="dialog-bottom-transition" max-width="1000">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        outlined
        color="blue"
        v-bind="attrs"
        v-on="on"
        class="ma-2 white--text"
      >
        Nuevo paciente
        <v-icon right dark> mdi-plus </v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>Nuevo paciente</v-toolbar>
        <div class="mt-5 mx-5 fieldsDialog">
          <div>
            <v-img max-height="700px" max-width="500px" :src="myImage"></v-img>
          </div>
          <div class="sizeInputs">
            <v-text-field label="Nombre" class="mt-4 mx-5"></v-text-field>
            <v-text-field label="Apellidos" class="mt-4 mx-5"></v-text-field>

            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
              class="mt-4 mx-5"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Fecha de nacimiento"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                :active-picker.sync="activePicker"
                :max="
                  new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                    .toISOString()
                    .substr(0, 10)
                "
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>

            <v-select :items="items" label="Sexo" class="mt-4 mx-5"></v-select>
            <v-text-field label="Clinica" class="mt-4 mx-5"></v-text-field>

            <v-checkbox
              v-model="ex4"
              label="Recortar dejando 1-3 mm de encía"
              color="success"
              class="mt-4 mx-5"
              hide-details
            ></v-checkbox>
            <v-checkbox
              v-model="ex4"
              label="Recortar a nivel de los cuellos"
              color="success"
              class="mt-4 mx-5"
              hide-details
            ></v-checkbox>

            <div class="mt-4" style="display: flex">
              <p class="mt-4 mx-5">¿SecretRetainer?</p>
              <v-checkbox
                v-model="ex4"
                label="SI"
                color="success"
                class="mt-4 mx-5"
                hide-details
              ></v-checkbox>
              <v-checkbox
                v-model="ex4"
                label="NO"
                color="success"
                class="mt-4 mx-5"
                hide-details
              ></v-checkbox>
            </div>
          </div>
        </div>
        <v-card-actions class="justify-start mt-4">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "ButtonNew",

  data: () => ({
    // Imagen boca
    myImage: require("@/assets/maxilar.jpg"),

    // Fecha de nacimiento
    date: null,
    menu: false,

    // Sexo
    items: ["Hombre", "Mujer"],
  }),

  methods: {
    // Guarda la selección en el input
    save(date) {
      this.$refs.menu.save(date);
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
