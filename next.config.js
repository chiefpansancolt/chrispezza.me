module.exports = {
  experimental: {
    modern: true,
  },
  target: 'serverless',
  webpack(config, options) {
    if (!options.dev) {
      options.defaultLoaders.babel.options.cache = false
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    return config
  }
}
