module.exports = {
  publicPath: "./",
  devServer: {
    port: 4007
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
  },
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico"
    }
  }
};
