<template>
  <v-container>
    <v-card>
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-avatar size="30" color="blue">
              <v-icon v-text="item.avatar"></v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="item.avatar"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "CardList",
  data: () => ({
    items: [
      {
        avatar: "A",
      },
      {
        avatar: "B",
      },
      {
        avatar: "C",
      },
      {
        avatar: "D",
      },
    ],
    model: 1,
  }),
};
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
