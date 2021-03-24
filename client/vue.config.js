module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 9020
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/variables.scss";'
      }
    }
  }
}