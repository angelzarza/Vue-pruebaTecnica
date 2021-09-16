module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: "https://my-json-server.typicode.com/",
  },
};
