module.exports = {
  pluginOptions: {
    compression: {
      brotli: {
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        include: /\.(js|css|html|svg|json|webp)(\?.*)?$/i,
        compressionOptions: {
          level: 11
        },
        minRatio: 0.8
      },
      gzip: {
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json|webp)(\?.*)?$/i,
        minRatio: 0.8
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }
        return options
      })
  },
  devServer: {
    watchOptions: {
      poll: true
    },
    host: 'localhost',
    port: 8081,
    // disableHostCheck: true
  },
  pwa: {
    name: 'Prakerja - Codepolitan', // <---- this is PWA name
    workboxOptions: {
      skipWaiting: true
    }
  }
}
