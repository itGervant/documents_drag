const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: config => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
  }
})
module.exports = {
  pluginOptions: {
      svgSprite: {
          /*
           * The directory containing your SVG files.
           */
          dir: 'src/assets/icons',
          /*
           * The regex that will be used for the Webpack rule.
           */
          test: /\.(svg)(\?.*)?$/,
          /*
           * @see https://github.com/kisenka/svg-sprite-loader#configuration
           */
          loaderOptions: {
              extract: true, // or false if you need the sprite to be automatically injected in the document.body
              spriteFilename: 'img/icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
          },
          /*
           * @see https://github.com/kisenka/svg-sprite-loader#configuration
           */
          pluginOptions: {
              plainSprite: true
          }    
      }    
  }    
};